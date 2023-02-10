import React from 'react';
import { Link } from 'react-router-dom';

class List extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
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
                id1: document.querySelector(`#id1-${id}`).value,
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
    render(){
        const contactData=this.state.data;
        const rows=contactData.map((contact)=>
            <tr key={contact.id}>
                <td>
                    {this.state.selectedForEdit === contact.id ?
                        <input type="text" id={`id1-${contact.id}`} defaultValue={contact.id1} /> :
                        contact.id1}
                </td>
                <td>
                    {this.state.selectedForEdit === contact.id ?
                        <input type="text" id={`first_name-${contact.id}`} defaultValue={contact.first_name} /> :
                        contact.first_name}
                </td>
                <td>
                    {this.state.selectedForEdit === contact.id ?
                        <input type="text" id={`last_name-${contact.id}`} defaultValue={contact.last_name} /> :
                        contact.last_name}
                </td>
                <td>
                    {this.state.selectedForEdit === contact.id ?
                        <input type="text" id={`email-${contact.id}`} defaultValue={contact.email} /> :
                        contact.email}
                </td>
                <td>
                    {this.state.selectedForEdit === contact.id ?
                        <input type="text" id={`work_phone-${contact.id}`} defaultValue={contact.work_phone} /> :
                        contact.work_phone}
                </td>
                <td>
                    {this.state.selectedForEdit === contact.id ?
                        <input type="text" id={`personal_phone-${contact.id}`} defaultValue={contact.personal_phone} /> :
                        contact.personal_phone}
                </td>
                <td>
                    {this.state.selectedForEdit === contact.id ?
                        <input type="text" id={`address-${contact.id}`} defaultValue={contact.address} /> :
                        contact.address}
                </td>
                <td>
                    {this.state.selectedForEdit === contact.id ?
                        <input type="text" id={`birthday-${contact.id}`} defaultValue={contact.birthday} /> :
                        contact.birthday}
                </td>
                <td>
                    <button className="btn btn-info mr-2" onClick={()=>this.editData(contact.id)}>
                        {this.state.selectedForEdit === contact.id ? 'Save' : 'Edit'}
                    </button>
                    <button onClick={() => this.deleteData(contact.id)} className="btn btn-danger">
                        {this.state.selectedForDeletion === contact.id ? "For sure?" : "Delete"}
                    </button>
                </td>
            </tr>

        );
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Work phone</th>
                        <th>Personal phone</th>
                        <th>Address</th>
                        <th>Birthday</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }

}

export default List;