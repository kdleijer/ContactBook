import React from 'react';
import Navbar from "./Navbar";
import Dropdown from 'react-bootstrap/Dropdown';
import { v4 } from 'uuid';

class List extends React.Component{
    constructor(props){
        super(props);
        this.state={
            old_group: '',
            contact_group: '',
            contact_id: '',
            first_name: '',
            last_name: '',
            email: '',
            work_phone: '',
            personal_phone: '',
            address: '',
            birthday: '',
            data: [],
            editingGroup: '',
            searchQuery: '',
            searchOption: 'first_name',
            searchColumn: '',
            isEditing: false,
            selectedForDeletion: null,
            selectedForEdit: null,
            disableDeleteButtons: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


/* BLUE "CONTACTS" TEXT */
    displayContactsMessage() {
        return (
            <p className={ "linkList" } onClick={ () => this.addContact() }>
                contacts&nbsp;
            </p>
        );
    }
/* BLUE "CONTACTS" TEXT */


/* INITIAL FETCH DATA */
    fetchData() {
        const user = localStorage.getItem('user');
        fetch(`http://127.0.0.1:8000/contact/?user=${user}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data
                });
                if (data.length === 0) {
                    this.setState({ contact_group: "New Group 1" });
                }
            });
    }
/* INITIAL FETCH DATA */


/* LIFECYCLE METHOD */
    componentDidMount(){
        const savedContactGroup = localStorage.getItem('contact_group');
        if (savedContactGroup) {
            this.setState({ contact_group: savedContactGroup });
        }
        this.fetchData();
    }
/* LIFECYCLE METHOD */


/* DELETE CONTACT */
    deleteData(id){
        if (this.state.selectedForDeletion === id) {
            fetch(`http://127.0.0.1:8000/contact/` + id + '/', {
                method: 'DELETE',
                body: JSON.stringify(this.state),
            })
            .then(response => response)
            .then((data) => {
                if(data) {
                    this.setState({ selectedForDeletion: null });
                    this.fetchData();
                }
            });
        } else {
            this.setState({ selectedForDeletion: id, selectedForEdit: null });
        }
    }
/* DELETE CONTACT */


/* EDIT CONTACT */
    editData(id) {
        if (this.state.selectedForEdit === id) {
            const updatedContact = this.getUpdatedContactInfo(id);
            this.updateContact(id, updatedContact);
        } else {
            this.setState({ selectedForEdit: id, selectedForDeletion: null });
        }
    }

    getUpdatedContactInfo(id) {
        const contactInfo = {
            contact_id: "",
            first_name: "",
            last_name: "",
            email: "",
            work_phone: "",
            personal_phone: "",
            address: "",
            birthday: "",
        };
        const fields = ["contact_id", "first_name", "last_name", "email", "work_phone", "personal_phone", "address", "birthday"];
        fields.forEach((field) => {
            contactInfo[field] = document.querySelector(`#${field}-${id}`).value;
        });
        return contactInfo;
    }

    updateContact(id, updatedContact) {
        fetch(`http://127.0.0.1:8000/contact/` + id + '/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedContact),
        })
            .then((response) => response)
            .then((data) => {
                if (data) {
                    this.setState({ selectedForEdit: null });
                    this.fetchData();
                }
            });
    }
/* EDIT CONTACT */


/* CANCEL EDIT/DELETE */
    cancel = () => {
        this.setState({ selectedForEdit: null });
        this.setState({ selectedForDeletion: null });
    };
/* CANCEL EDIT/DELETE */


/* ADD CONTACT */
    addContact() {
        this.setState({
            user: localStorage.getItem('user'),
            contact_id: '',
            first_name: '',
            last_name: '',
            email: '',
            work_phone: '',
            personal_phone: '',
            address: '',
            birthday: ''
        }, () => {
            let data = { ...this.state };
            fetch(`http://127.0.0.1:8000/contact/`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-type': 'application/json; charset=UTF-8' },
            })
                .then(response => response.json())
                .then((data) => {
                    this.fetchData();
                    localStorage.setItem('contact_group', this.state.contact_group);
                    this.setState({ selectedForEdit: data.id, selectedForDeletion: null });
                });
        });
    }
/* ADD CONTACT */


/* EDIT GROUP NAME */
    handleEdit() {
        this.setState({
            isEditing: true
        });
    };
    handleChange = event => {
        this.setState({
          contact_group: event.target.value
        });
    };
    handleSubmit() {
        this.state.data.forEach((contact) => {
            if (contact.contact_group === this.state.oldGroup) {
                let updatedContact = {
                    contact_group: this.state.contact_group,
                };
                fetch(`http://127.0.0.1:8000/contact/${contact.id}/`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedContact),
                })
                    .then(response => response)
                    .then((data) => {
                        if (data) {
                            this.fetchData();
                            localStorage.setItem('contact_group', this.state.contact_group);
                        }
                    });
            }
        });
        this.setState({ isEditing: false });
    };
/* EDIT GROUP NAME */



/* RENDER BUTTONS */
    renderButtons(contact) {
        const buttonStyles = { padding: 2, marginLeft: 2 }
        const editButton = (
            <button className="btn btn-outline-info" onClick={ () => this.editData(contact.id) }>
                { this.state.selectedForEdit === contact.id ? "Save" : "Edit" }
            </button>
        );
        const cancelButton = (
            <button className="btn btn-outline-dark" onClick={ () => this.cancel(contact.id) } style={{ marginLeft: 0 }}>
                Cancel
            </button>
        );
        const deleteButton = (
            <button className="btn btn-outline-danger" style={{ opacity: this.state.disableDeleteButtons ? 0.2 : 1, marginLeft: 0 }} disabled={ !!this.state.disableDeleteButtons } onClick={ () => this.deleteData(contact.id) }>
                { this.state.selectedForDeletion === contact.id ? "Sure?" : "Delete" }
            </button>
        );
        let buttonGroup;
        if ( this.state.selectedForEdit === contact.id )            { buttonGroup = <div style={ buttonStyles }>   { editButton }   { cancelButton }   </div>; }
        else if (this.state.selectedForDeletion === contact.id)     { buttonGroup = <div style={ buttonStyles }>   { cancelButton } { deleteButton }   </div>; }
        else                                                        { buttonGroup = <div style={ buttonStyles }>   { editButton }   { deleteButton }   </div>; }
        return <td style={ buttonStyles }>{ buttonGroup }</td>;
    }
/* RENDER BUTTONS */

    renderMessage() {
        return (
            <div className={ "messages" }>
                <h2 className="bounce_header" style={{ marginLeft: "auto" }}> No&nbsp; </h2>
                <div style={{ marginTop: '11.3%' }}> { this.displayContactsMessage() } </div>
                <h2 className="bounce_header" style={{ marginRight: "auto" }}> matching the { this.state.searchOption } </h2>
            </div>
        )
    }

/* RENDER MENU */
    renderSearch(){
        return (
            <input type="search" className="search-bar" value={ this.state.searchQuery } placeholder={ `Search by ${ this.state.searchOption }` } onChange={ e => this.setState({ searchQuery: e.target.value }) } />
        )
    }
    renderDropdown() {
        return (
            <Dropdown className="dropdown">
                <Dropdown.Toggle variant="outline-info" id="dropdown-basic"/>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={ () => this.setState({ searchOption: 'first_name'     }) }>       First name         </Dropdown.Item>
                    <Dropdown.Item onClick={ () => this.setState({ searchOption: 'last_name'      }) }>       Last name          </Dropdown.Item>
                    <Dropdown.Item onClick={ () => this.setState({ searchOption: 'email'          }) }>       Email              </Dropdown.Item>
                    <Dropdown.Item onClick={ () => this.setState({ searchOption: 'work_phone'     }) }>       Work phone         </Dropdown.Item>
                    <Dropdown.Item onClick={ () => this.setState({ searchOption: 'personal_phone' }) }>       Personal phone     </Dropdown.Item>
                    <Dropdown.Item onClick={ () => this.setState({ searchOption: 'address'        }) }>       Address            </Dropdown.Item>
                    <Dropdown.Item onClick={ () => this.setState({ searchOption: 'birthday'       }) }>       Birthday           </Dropdown.Item>
                    <Dropdown.Item onClick={ () => this.setState({ searchOption: 'contact_group'  }) }>       Contact group      </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
    renderMenu() {
        const uniqueContactGroups = [...new Set(this.state.data.map(contact => contact.contact_group))];
        let newGroupName = `New Group ${ uniqueContactGroups.length }`;
        while (uniqueContactGroups.includes(newGroupName)) {
            const number = parseInt(newGroupName.slice(-1), 10);
            newGroupName = newGroupName.slice(0, -1) + (number + 1);
        }
        if (this.matchedContacts.length === 0) {
            if (this.state.data.length === 0) { return <Navbar/> }
            return (
                <div>
                    <Navbar/>
                    { this.renderSearch() } { this.renderDropdown() } { this.renderMessage() }
                </div>
            );
        }
        return (
            <div>
                <Navbar/>
                { this.renderSearch() } { this.renderDropdown() }
                <button onClick={ () => { this.addContact(); this.setState({ contact_group: newGroupName });} } className="btn btn-outline-success new-group-button">
                    <div className="new-group-button-text"> + </div>
                </button>
            </div>
        );
    }
/* RENDER MENU */


/* RENDER TABLES */
    render() {
        const { data, searchQuery } = this.state;
        const groups = data.reduce((acc, contact) => {
            if (!acc[contact.contact_group]) {
                acc[contact.contact_group] = [];
            }
            acc[contact.contact_group].push(contact);
            return acc;
        }, {});
        this.matchedContacts = Object.entries(groups).filter(([group, contacts]) => {
            return contacts.some(contact =>
                contact[this.state.searchOption].toLowerCase().includes(searchQuery.toLowerCase())
            );
        })

        if (data.length === 0) {
            setTimeout(() => {
                this.setState({showMessage: true});
            }, 500);
            return (
                <div>
                    { this.renderMenu() }
                    { this.state.showMessage ? (
                        <div className={ "messages" } style={{ marginLeft: '25%' }}>
                            <h2 className="bounce_header">There are no&nbsp;</h2><div style={{ marginTop: '10.1%' }}>{ this.displayContactsMessage() }</div>
                        </div>
                    ) : null }
                </div>
            );
        }

        const tables = this.matchedContacts.map(([group, contacts]) => {
            const contactData = contacts.filter(contact =>
                contact[this.state.searchOption].toLowerCase().includes(searchQuery.toLowerCase())
            );
            const rows = contactData.map(contact => {
                const inputFields = [
                    {  id: "contact_id",      defaultValue: contact.contact_id,      width:  44,  maxLength:  4  },
                    {  id: "first_name",      defaultValue: contact.first_name,      width: 128,  maxLength: 15  },
                    {  id: "last_name",       defaultValue: contact.last_name,       width: 155,  maxLength: 25  },
                    {  id: "email",           defaultValue: contact.email,           width: 243,  maxLength: 40  },
                    {  id: "work_phone",      defaultValue: contact.work_phone,      width: 140,  maxLength: 15  },
                    {  id: "personal_phone",  defaultValue: contact.personal_phone,  width: 139,  maxLength: 15  },
                    {  id: "address",         defaultValue: contact.address,         width: 335,  maxLength: 50  },
                    {  id: "birthday",        defaultValue: contact.birthday,        width:  86,  maxLength: 10  }
                ];
                const inputFieldsElements = inputFields.map(field => (
                    <td key={ `${ field.id }-${ contact.id }` } style={{ padding: 7 }}>
                        { this.state.selectedForEdit === contact.id ? (
                            <input type="text" id={ `${ field.id }-${ contact.id }` } defaultValue={ field.defaultValue }
                                   style={{ width: field.width, marginTop: -4, marginLeft: -4, marginBottom: -4,
                                       ...field.style }} maxLength={ field.maxLength } />
                        ) : ( <div className="contactFields">{ field.defaultValue }</div> ) }
                    </td>
                ));
                return (
                    <tr key={v4()}>{ inputFieldsElements }{ this.renderButtons(contact) }</tr>
                );
            });

            return (
                <div key={ v4() }>
                    <div className="contact-group-block">
                        { this.state.editingGroup === group ? (
                            <form className="edit-group-form" onSubmit={ this.handleSubmit }>
                                <input type="text" className="edit-group-input" value={ this.state.contact_group } onChange={ this.handleChange } autoFocus onBlur={ () => this.setState({ editingGroup: null }) }/>
                            </form>
                        ) : (
                            <h3 className="table-group-header" onClick={ () => { this.handleEdit(); this.setState({ contact_group: group, editingGroup: group, oldGroup: group }); } }>
                                { group }
                            </h3>
                        ) }

                        <div className="contactGroup">
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th style={{ width:  48, padding: 6, fontSize: 17 }}>     ID                 </th>
                                    <th style={{ width: 124, padding: 6, fontSize: 17 }}>     First name         </th>
                                    <th style={{ width: 149, padding: 6, fontSize: 17 }}>     Last name          </th>
                                    <th style={{ width: 230, padding: 6, fontSize: 17 }}>     Email              </th>
                                    <th style={{ width: 135, padding: 6, fontSize: 17 }}>     Work phone         </th>
                                    <th style={{ width: 135, padding: 6, fontSize: 17 }}>     Personal phone     </th>
                                    <th style={{ width: 313, padding: 6, fontSize: 17 }}>     Address            </th>
                                    <th style={{ width:  86, padding: 6, fontSize: 17 }}>     Birthday           </th>
                                    <th style={{ width: 123, padding: 4, fontSize: 17 }}>

                                        <button style={{ marginLeft: 0 }} className="btn btn-outline-success" onClick={ () => { this.addContact(); this.setState({ contact_group: group }); } }>
                                            Add
                                        </button>

                                        <button style={{ marginLeft: 4 }} className="btn btn-outline-dark"    onClick={ () => { this.setState({ disableDeleteButtons: !this.state.disableDeleteButtons }); } }>
                                            <s>Delete</s>
                                        </button>

                                    </th>
                                </tr>
                                </thead>
                                <tbody>{ rows }</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <div>
                { this.renderMenu() }
                { tables            }
            </div>
        );
    }
/* RENDER TABLES */
}
export default List;