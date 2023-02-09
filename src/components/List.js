import React from 'react';
import { Link } from 'react-router-dom';

function List(){
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
                <tr>
                    <td>9999</td>
                    <td>Example</td>
                    <td>Example</td>
                    <td>example@gmail.com</td>
                    <td>999 999 999</td>
                    <td>999 999 999</td>
                    <td>Example</td>
                    <td>05.02.2023</td>
                    <td>
                        <Link to="/update/1" className="btn btn-info mr-2">Update</Link>
                        <button className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default List;