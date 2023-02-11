import React from 'react';
class Add extends React.Component{
    constructor(){
        super();
        this.state={
            contact_id:'',
            first_name:'',
            last_name:'',
            email:'',
            work_phone:'',
            personal_phone:'',
            address:'',
            birthday:''
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }

    // Change Handler
    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    // Form
    submitForm(){
        let data = {...this.state};
        Object.keys(data).forEach(key => {
          if (!data[key]) {
            data[key] = '-';
          }
        });

        fetch('http://127.0.0.1:8000/contact/',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));

        this.setState({
            contact_id:'',
            first_name:'',
            last_name:'',
            email:'',
            work_phone:'',
            personal_phone:'',
            address:'',
            birthday:''
        });

    }

    render(){
        return (
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>ID</th>
                        <td>
                            <input value={this.state.contact_id} name="contact_id" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>First name</th>
                        <td>
                            <input value={this.state.first_name} name="first_name" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Last name</th>
                        <td>
                            <input value={this.state.last_name} name="last_name" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>
                            <input value={this.state.email} name="email" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Work phone</th>
                        <td>
                            <input value={this.state.work_phone} name="work_phone" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Personal phone</th>
                        <td>
                            <input value={this.state.personal_phone} name="personal_phone" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td>
                            <input value={this.state.address} name="address" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Birthday</th>
                        <td>
                            <input value={this.state.birthday} name="birthday" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <input type="submit" onClick={this.submitForm} className="btn btn-dark" />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}
export default Add;