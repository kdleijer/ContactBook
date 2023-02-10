import React from 'react';
import { Link } from 'react-router-dom';

class List extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
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
                    <Link to={"/update/"+contact.id} className="btn btn-info mr-2">Update</Link>
                    <button className="btn btn-danger">Delete</button>
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