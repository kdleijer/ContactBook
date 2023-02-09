import React from 'react';
import { Link } from 'react-router-dom';
function Add(){
    return (
        <table className="table table-bordered">
            <tr>
                <th>ID</th>
                <td>
                    <input type="text" className="form-control" />
                </td>
            </tr>
            <tr>
                <th>First name</th>
                <td>
                    <input type="text" className="form-control" />
                </td>
            </tr>
            <tr>
                <th>Last name</th>
                <td>
                    <input type="text" className="form-control" />
                </td>
            </tr>
            <tr>
                <th>Email</th>
                <td>
                    <input type="text" className="form-control" />
                </td>
            </tr>
            <tr>
                <th>Work phone</th>
                <td>
                    <input type="text" className="form-control" />
                </td>
            </tr>
            <tr>
                <th>Personal phone</th>
                <td>
                    <input type="text" className="form-control" />
                </td>
            </tr>
            <tr>
                <th>Address</th>
                <td>
                    <input type="text" className="form-control" />
                </td>
            </tr>
            <tr>
                <th>Birthday</th>
                <td>
                    <input type="text" className="form-control" />
                </td>
            </tr>
            <tr>
                <td colSpan="2">
                    <input type="submit" className="btn btn-dark" />
                </td>
            </tr>
        </table>
    );
}

export default Add;