import React from 'react';

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

    cancel = () => {
        this.setState({ selectedForEdit: null });
        this.setState({ selectedForDeletion: null });
    };

    render(){
        const contactData=this.state.data;
        const rows=contactData.map((contact)=>
            <tr key={contact.id}>
                <td>
                    {this.state.selectedForEdit === contact.id ?
                        <input type="text" id={`id1-${contact.id}`} defaultValue={contact.id1} style={{width: 53, marginTop: -5, marginLeft: -4, marginRight: -4}}/> :
                        contact.id1}
                </td>
                <td>
                    {this.state.selectedForEdit === contact.id ?
                        <input type="text" id={`first_name-${contact.id}`} defaultValue={contact.first_name} style={{width: 118, marginTop: -5, marginLeft: -4, marginRight: -4}}/> :
                        contact.first_name}
                </td>
                <td>
                    {this.state.selectedForEdit === contact.id ?
                        <input type="text" id={`last_name-${contact.id}`} defaultValue={contact.last_name} style={{width: 148, marginTop: -5, marginLeft: -4, marginRight: -4}}/> :
                        contact.last_name}
                </td>
                <td>
                    {this.state.selectedForEdit === contact.id ?
                        <input type="text" id={`email-${contact.id}`} defaultValue={contact.email} style={{width: 278, marginTop: -5, marginLeft: -4, marginRight: -4}}/> :
                        contact.email}
                </td>
                <td>
                    {this.state.selectedForEdit === contact.id ?
                        <input type="text" id={`work_phone-${contact.id}`} defaultValue={contact.work_phone} style={{width: 133, marginTop: -5, marginLeft: -4, marginRight: -4}}/> :
                        contact.work_phone}
                </td>
                <td>
                    {this.state.selectedForEdit === contact.id ?
                        <input type="text" id={`personal_phone-${contact.id}`} defaultValue={contact.personal_phone} style={{width: 133, marginTop: -5, marginLeft: -4, marginRight: -4}}/> :
                        contact.personal_phone}
                </td>
                <td>
                    {this.state.selectedForEdit === contact.id ?
                        <input type="text" id={`address-${contact.id}`} defaultValue={contact.address} style={{width: 283, marginTop: -5, marginLeft: -4, marginRight: -4}}/> :
                        contact.address}
                </td>
                <td>
                    {this.state.selectedForEdit === contact.id ?
                        <input type="text" id={`birthday-${contact.id}`} defaultValue={contact.birthday} style={{width: 83, marginTop: -5, marginLeft: -4, marginRight: -4}}/> :
                        contact.birthday}
                </td>
                <td style={{marginTop: -5, marginLeft: -4}}>
                    {this.state.selectedForEdit !== contact.id && this.state.selectedForDeletion !== contact.id && ( <>
                          <button className="btn btn-info mr-2" onClick={() => this.editData(contact.id)}>Edit</button>
                          <button onClick={() => this.deleteData(contact.id)} className="btn btn-danger">Delete</button>
                        </>)}
                    {this.state.selectedForEdit === contact.id && ( <>
                          <button className="btn btn-info mr-2" onClick={() => this.editData(contact.id)}>Save</button>
                          <button onClick={() => this.cancel(contact.id)} className="btn btn-secondary mr-2">Cancel</button>
                        </>)}
                    {this.state.selectedForDeletion === contact.id && ( <>
                          <button onClick={() => this.deleteData(contact.id)} className="btn btn-danger mr-2">For sure?</button>
                          <button onClick={() => this.cancel(contact.id)} className="btn btn-secondary">Cancel</button>
                        </>)}
                </td>
            </tr>
        );

        return (
            <table className="table table-bordered" style={{ width: 'auto', marginLeft: 15, marginRight: 15 }}>
                <thead>
                    <tr>
                        <th style={{ width: 70 }}>ID</th>
                        <th style={{ width: 135 }}>First name</th>
                        <th style={{ width: 165 }}>Last name</th>
                        <th style={{ width: 295 }}>Email</th>
                        <th style={{ width: 150 }}>Work phone</th>
                        <th style={{ width: 150 }}>Personal phone</th>
                        <th style={{ width: 300 }}>Address</th>
                        <th style={{ width: 100 }}>Birthday</th>
                        <th style={{ width: 200 }}>Actions</th>
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