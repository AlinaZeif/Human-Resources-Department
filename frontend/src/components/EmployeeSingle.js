import React from 'react'

const EmployeeSingle = (props) => {
	return (
        <div className="row">
            <div className="col s4">
                <div className="card">
                     <div className="card-image">
                         <img src={props.employee.image} alt={props.employee.image}></img>
                         <span className="card-title">{props.employee.firstName} {props.employee.lastName}</span>
                     </div>
                     <div className="card-content">
                        <tr><td>Name: </td><td><b>{props.employee.firstName}</b></td></tr>
                        <tr><td>Surname: </td><td><b>{props.employee.lastName}</b></td></tr>
                        <tr><td>Phone: </td><td><b>{props.employee.phone}</b></td></tr>
                        <tr><td>Email: </td><td><b>{props.employee.email}</b></td></tr>
                     </div>
                     <div className="card-action">
                         <a href="#!">{props.employee.team}</a>
                     </div>
                </div>
            </div>
        </div>
    ); 
}

export default EmployeeSingle;



