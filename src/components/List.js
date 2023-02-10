import React from 'react';
import { Link } from 'react-router-dom';

class List extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            selectedForDeletion: null,
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

    render(){
        const contactData=this.state.data;
        const rows=contactData.map((contact)=>
            <tr key={contact.id}>
                <td>{contact.id1}</td>
                <td>{contact.first_name}</td>
                <td>{contact.last_name}</td>
                <td>{contact.email}</td>
                <td>{contact.work_phone}</td>
                <td>{contact.personal_phone}</td>
                <td>{contact.address}</td>
                <td>{contact.birthday}</td>
                <td>
                    <Link to={"/update/" + contact.id} className="btn btn-info mr-2">Update</Link>
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