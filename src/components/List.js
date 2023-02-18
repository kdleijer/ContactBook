import React from 'react';
import { saveAs } from "file-saver";
import Navbar from "./Navbar";

class List extends React.Component{
    constructor(props){
        super(props);
        this.state={
            old_group:'',
            contact_group:'',
            contact_id:'',
            first_name:'',
            last_name:'',
            email:'',
            work_phone:'',
            personal_phone:'',
            address:'',
            birthday:'',
            data:[],
            isEditing: false,
            selectedForDeletion: null,
            selectedForEdit: null,
            searchQuery: '',
            searchColumn: '',
            disableDeleteButtons: false,
        };
    }

/* DOWNLOAD DATA */
    downloadAsJSON = () => {
    const jsonData = JSON.stringify(this.state.data);
    const blob = new Blob([jsonData], { type: "application/json" });
    saveAs(blob, "contacts.json");
  };
/* DOWNLOAD DATA */
//TODO: write downloadAsPDF function


/* INITIAL FETCH DATA */
    fetchData(){
        fetch('http://127.0.0.1:8000/contact/')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                data:data
            });
        });
    }
/* INITIAL FETCH DATA */


/* LIFECYCLE METHOD */
    componentDidMount(){
        const savedContactGroup = localStorage.getItem('contact_group');
        if (savedContactGroup) {
          this.setState({ contact_group: savedContactGroup });
        }

        fetch('http://127.0.0.1:8000/contact/')
            .then(response => response.json())
            .then(data => {
                if (data.length === 0) {
                    this.setState({ contact_group: "Initial group" });
                    this.addContact();}})
        this.fetchData();
        }
/* LIFECYCLE METHOD */


/* DELETE CONTACT */
    deleteData(id){
        if (this.state.selectedForDeletion === id) {
            fetch('http://127.0.0.1:8000/contact/' + id + '/', {
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
    editData(id){
        if (this.state.selectedForEdit === id) {
            const updatedContact = {
                contact_id: document.querySelector(`#contact_id-${id}`).value,
                first_name: document.querySelector(`#first_name-${id}`).value,
                last_name: document.querySelector(`#last_name-${id}`).value,
                email: document.querySelector(`#email-${id}`).value,
                work_phone: document.querySelector(`#work_phone-${id}`).value,
                personal_phone: document.querySelector(`#personal_phone-${id}`).value,
                address: document.querySelector(`#address-${id}`).value,
                birthday: document.querySelector(`#birthday-${id}`).value,
            }

            fetch('http://127.0.0.1:8000/contact/' + id + '/', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedContact),
            })
            .then(response => response)
            .then((data) => {
                if(data) {
                    this.setState({ selectedForEdit: null });
                    this.fetchData();
                }
            });
        } else {
            this.setState({ selectedForEdit: id, selectedForDeletion: null });
        }
    }
/* EDIT CONTACT */


/* CANCEL EDIT/DELETE */
    cancel = () => {
        this.setState({ selectedForEdit: null });
        this.setState({ selectedForDeletion: null });
    };
/* CANCEL EDIT/DELETE */


/* ADD CONTACT */
    addContact = () => {
        this.setState({
            contact_id: '',
            first_name: '',
            last_name: '',
            email: '',
            work_phone: '',
            personal_phone: '',
            address: '',
            birthday: ''
        }, () => {
            let data = {...this.state};
            fetch('http://127.0.0.1:8000/contact/', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(response => response.json())
            .then((data) => {
                this.fetchData();
                localStorage.setItem('contact_group', this.state.contact_group);
                this.setState({ selectedForEdit: data.id, selectedForDeletion: null});
            });
        });
    }
    handleEdit = () => {
    this.setState({
        isEditing: true
    });
  };
/* ADD CONTACT */


/* EDIT GROUP NAME */
    handleChange = event => {
        this.setState({
          contact_group: event.target.value
        });
    };
    handleSubmit = () => {
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
                    body: JSON.stringify(updatedContact),})
                    .then(response => response)
                    .then((data) => {
                        if (data) {
                            this.fetchData();
                            localStorage.setItem('contact_group', this.state.contact_group);
                        }
                    });
            }
        });
        this.setState({isEditing: false});
    };
/* EDIT GROUP NAME */

    render() {
        const { data, searchQuery } = this.state;
        const contactData = data.filter(contact => contact.first_name.toLowerCase().includes(searchQuery.toLowerCase()));
        const rows = contactData.map((contact) => {
            const inputFields = [
                {id: "contact_id", defaultValue: contact.contact_id, width: 42},
                {id: "first_name", defaultValue: contact.first_name, width: 116},
                {id: "last_name", defaultValue: contact.last_name, width: 162},
                {id: "email", defaultValue: contact.email, width: 219, style: {textOverflow: "ellipsis"}},
                {id: "work_phone", defaultValue: contact.work_phone, width: 126},
                {id: "personal_phone", defaultValue: contact.personal_phone, width: 127},
                {id: "address", defaultValue: contact.address, width: 295, style: {textOverflow: "ellipsis"}},
                {id: "birthday", defaultValue: contact.birthday, width: 85}
            ];
            const inputFieldsElements = inputFields.map((field) => (
                <td key={`${field.id}-${contact.id}`}>
                    {this.state.selectedForEdit === contact.id ?
                        <input type="text" id={`${field.id}-${contact.id}`} defaultValue={field.defaultValue} style={{
                            width: field.width, marginTop: -5, marginLeft: -4, marginRight: -4, ...field.style}}/> :
                        field.defaultValue}
                </td>
            ));

            return (
                <tr key={contact.id}>
                    {inputFieldsElements}
                    <td style={{marginTop: -5, marginLeft: -4}}>
                        {this.state.selectedForEdit !== contact.id && this.state.selectedForDeletion !== contact.id && (
                            <>
                                <button className="btn btn-info mr-2" onClick={() => this.editData(contact.id)}>Edit
                                </button>
                                <button className="btn btn-danger"
                                        style={{marginLeft: 1, opacity: this.state.disableDeleteButtons ? 0.2 : 1}}
                                        disabled={!!this.state.disableDeleteButtons}
                                        onClick={() => this.deleteData(contact.id)}>Delete
                                </button>
                            </>
                        )}
                        {this.state.selectedForEdit === contact.id && (
                            <>
                                <button className="btn btn-info mr-2" onClick={() => this.editData(contact.id)}>Save
                                </button>
                                <button style={{marginLeft: 1}} onClick={() => this.cancel(contact.id)}
                                        className="btn btn-secondary mr-2">Cancel
                                </button>
                            </>
                        )}
                        {this.state.selectedForDeletion === contact.id && (
                            <>
                                <button onClick={() => this.cancel(contact.id)} className="btn btn-secondary">Cancel
                                </button>
                                <button style={{marginLeft: 9}} onClick={() => this.deleteData(contact.id)}
                                        className="btn btn-danger mr-2">Sure?
                                </button>
                            </>
                        )}
                    </td>
                </tr>
            );
        });

        return (
        <div>
            <span className={"downloads"} onClick={this.downloadAsJSON}>Download JSON</span>
            <Navbar />
            <input type="search" value={this.state.searchQuery} placeholder="Search by first name" onChange={e => this.setState({ searchQuery: e.target.value })}
                style={{ position: "absolute", top: 10, right: 10, borderRadius: 8, height: 35, outline: 'none', paddingLeft: 10, borderWidth: 0 }} />

            <button onClick={() => { this.addContact(); this.setState({ contact_group: "New group" }); }} className="btn btn-outline-success"
                style={{ position: "absolute", left: 40, top: 117, width: 25, height: 25, borderRadius: 5, padding: 0, fontSize: 25 }}> <div style={{marginTop: -10.5, marginLeft: -1}}>+</div></button>


                <div style={{maxHeight: 350, overflow: "scroll"}} className="contactGroup">
                    <div>
                      {this.state.isEditing ? (
                          <form style={{ position: "absolute", top: 99, left: 78, fontSize: 35}} onSubmit={this.handleSubmit}>
                              <input type="text" value={this.state.contact_group} onChange={this.handleChange} style={{ fontWeight:500,  outline: "none", borderWidth: 0 }} autoFocus/>
                          </form>
                        ) : (

                          <h3 style={{ position: "absolute", top: 105, left: 80, fontSize: 35 }} onClick={() => { this.handleEdit(); this.setState({ oldGroup: this.state.contact_group }); }}>
                              {this.state.contact_group}
                          </h3>
                        )
                      }
                    </div>
                    <table className="table table-bordered" style={{ width: "100%",minWidth: 1470, maxWidth: 1470, marginLeft: 60, marginRight: 60 }}>
                        <thead>
                            <tr>
                                <th style={{ width: 58 }}>ID</th>
                                <th style={{ width: 130 }}>First name</th>
                                <th style={{ width: 175 }}>Last name</th>
                                <th style={{ width: 230 }}>Email</th>
                                <th style={{ width: 140 }}>Work phone</th>
                                <th style={{ width: 140 }}>Personal phone</th>
                                <th style={{ width: 304 }}>Address</th>
                                <th style={{ width: 100 }}>Birthday</th>
                                <th style={{ width: 146 }}>
                                    <button onClick={() => { this.addContact();
                                    this.setState({ contact_group: "Initial group" });}} className="btn btn-success">Add</button>

                                    <button className="btn btn-secondary mr-2" style={{marginLeft: 9}} onClick={() =>
                                    {this.setState({ disableDeleteButtons: !this.state.disableDeleteButtons });}}><s>Delete</s></button>
                                </th>

                                {/* TODO: Add button to create new group and initiate new table */}
                                {/* TODO: Create the ability to delete columns and add custom ones */}
                                {/* TODO: Change the order by dragging the columns */}

                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default List;