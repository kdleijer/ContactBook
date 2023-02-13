import React from 'react';
import {Link} from "react-router-dom";

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
        };
    }


    fetchData(){
        fetch('http://127.0.0.1:8000/contact/')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                data:data
            });
        });
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/contact/')
            .then(response => response.json())
            .then(data => {
                if (data.length === 0) {
          this.addContact();}})

        this.fetchData();
        }

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
            this.setState({ selectedForDeletion: id });
        }
    }

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
            this.setState({ selectedForEdit: id });
        }
    }

    cancel = () => {
        this.setState({ selectedForEdit: null });
        this.setState({ selectedForDeletion: null });
    };

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
                this.setState({ selectedForEdit: data.id, selectedForDeletion: null});
            });
        });
    }
    handleEdit = () => {
    this.setState({
      isEditing: true
    });
  };

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
                  body: JSON.stringify(updatedContact),
              })
                  .then(response => response)
                  .then((data) => {
                      if (data) {
                          this.fetchData();
                      }
                  });
          }
      });
      this.setState({isEditing: false, contact_group: ''});
  }


    render(){
        const contactData=this.state.data;
        const rows=contactData.map((contact)=>
            <tr key={contact.id}>
                <td>
                    {this.state.selectedForEdit === contact.id ?
                        <input type="text" id={`contact_id-${contact.id}`} defaultValue={contact.contact_id} style={{width: 42, marginTop: -5, marginLeft: -4, marginRight: -4}}/> :
                        contact.contact_id}
                </td>
                <td>
                    {this.state.selectedForEdit === contact.id ?
                        <input type="text" id={`first_name-${contact.id}`} defaultValue={contact.first_name} style={{width: 106, marginTop: -5, marginLeft: -4, marginRight: -4}}/> :
                        contact.first_name}
                </td>
                <td>
                    {this.state.selectedForEdit === contact.id ?
                        <input type="text" id={`last_name-${contact.id}`} defaultValue={contact.last_name} style={{width: 142, marginTop: -5, marginLeft: -4, marginRight: -4}}/> :
                        contact.last_name}
                </td>
                <td style={{textOverflow: 'ellipsis'}}>
                    {this.state.selectedForEdit === contact.id ?
                        <input type="text" id={`email-${contact.id}`} defaultValue={contact.email} style={{width: 219, marginTop: -5, marginLeft: -4, marginRight: -4}}/> :
                        contact.email}
                </td>
                <td>
                    {this.state.selectedForEdit === contact.id ?
                        <input type="text" id={`work_phone-${contact.id}`} defaultValue={contact.work_phone} style={{width: 126, marginTop: -5, marginLeft: -4, marginRight: -4}}/> :
                        contact.work_phone}
                </td>
                <td>
                    {this.state.selectedForEdit === contact.id ?
                        <input type="text" id={`personal_phone-${contact.id}`} defaultValue={contact.personal_phone} style={{width: 127, marginTop: -5, marginLeft: -4, marginRight: -4}}/> :
                        contact.personal_phone}
                </td>
                <td style={{textOverflow: 'ellipsis'}}>
                    {this.state.selectedForEdit === contact.id ?
                        <input type="text" id={`address-${contact.id}`} defaultValue={contact.address} style={{width: 270, marginTop: -5, marginLeft: -4, marginRight: -4}}/> :
                        contact.address}
                </td>
                <td>
                    {this.state.selectedForEdit === contact.id ?
                        <input type="text" id={`birthday-${contact.id}`} defaultValue={contact.birthday} style={{width: 86, marginTop: -5, marginLeft: -4, marginRight: -4}}/> :
                        contact.birthday}
                </td>
                <td style={{marginTop: -5, marginLeft: -4}}>
                    {this.state.selectedForEdit !== contact.id && this.state.selectedForDeletion !== contact.id && ( <>
                          <button className="btn btn-info mr-2" onClick={() => this.editData(contact.id)}>Edit</button>
                          <button style={{marginLeft: 1}} onClick={() => this.deleteData(contact.id)} className="btn btn-danger">Delete</button>
                        </>)}
                    {this.state.selectedForEdit === contact.id && ( <>
                          <button className="btn btn-info mr-2" onClick={() => this.editData(contact.id)}>Save</button>
                          <button style={{marginLeft: 1}} onClick={() => this.cancel(contact.id)} className="btn btn-secondary mr-2">Cancel</button>
                        </>)}
                    {this.state.selectedForDeletion === contact.id && ( <>
                        {/* Spam delete button */}
                            <button onClick={() => this.cancel(contact.id)} className="btn btn-secondary">Cancel</button>
                            <button style={{marginLeft: 9}} onClick={() => this.deleteData(contact.id)} className="btn btn-danger mr-2">Sure?</button>
                        {/* <button onClick={() => this.deleteData(contact.id)} className="btn btn-danger mr-2">Sure?</button>
                            <button onClick={() => this.cancel(contact.id)} className="btn btn-secondary">Cancel</button> */}
                        </>)}
                </td>
            </tr>
        );

        return (
            <div>
                    {/* MOVED NAVBAR FROM APP.JS */}
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">YourBrand</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link className="nav-link" to="/">List</Link>
                        </li>
                      </ul>
                    </div>
                    </nav>
                    {/* MOVED NAVBAR FROM APP.JS */}
                    <div>
                      {this.state.isEditing ? (
                          <form onSubmit={this.handleSubmit}>
                            <input type="text" value={this.state.contact_group} onChange={this.handleChange} />
                          </form>
                        ) : (
                          <h3 style={{ position: "absolute", top: 110, left: 65, fontSize: 35 }} onClick={() => { this.handleEdit(); this.setState({ oldGroup: this.state.contact_group }); }}>
                            {this.state.contact_group}
                          </h3>
                        )
                      }
                    </div>
                <div style={{maxHeight: 400, overflow: "scroll" }} className="contactGroup">
                    <table className="table table-bordered" style={{ width: "100%",minWidth: 1470, maxWidth: 1470, marginLeft: 60, marginRight: 60}}>
                        <thead>
                            <tr>
                                <th style={{ width: 58 }}>ID</th>
                                <th style={{ width: 120 }}>First name</th>
                                <th style={{ width: 155 }}>Last name</th>
                                <th style={{ width: 230 }}>Email</th>
                                <th style={{ width: 140 }}>Work phone</th>
                                <th style={{ width: 140 }}>Personal phone</th>
                                <th style={{ width: 280 }}>Address</th>
                                <th style={{ width: 100 }}>Birthday</th>
                                <th style={{ width: 200 }}><button onClick={() => { this.addContact();
                                    this.setState({ contact_group: "Initial group" });}} className="btn btn-success">Add</button></th>

                                {/* TODO: Add button to create new group and initiate new table */}
                                {/* TODO: Create the ability to delete columns and add custom ones */}
                                {/* TODO: Change the order by dragging the columns */}

                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>)
            </div>
        );
    }

}

export default List;