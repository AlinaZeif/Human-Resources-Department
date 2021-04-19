import React, { Component } from 'react'
import axios from 'axios';

//ccc
export class EmployeeForm extends Component {

    constructor(props){
        super();
    }

    submitEmployee = (event) => {
        event.preventDefault();

        axios.post('http://localhost:4000/employees', {
            image: this.refs.image.value,
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            phone: this.refs.phone.value,
            email: this.refs.email.value
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => console.error(error));
        window.location.reload();
    }

    deleteEmployee = (event) => {
        event.preventDefault();
        axios.delete(`http://localhost:4000/employee/${this.props.employee._id}`, {})
        .then((response) => {
            console.log(response);
        })
        .catch((error) => console.error(error));
        window.location.reload(false);
    }

    updateEmployee = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:4000/employee/${this.props.employee._id}`, {
            image: this.refs.image.value,
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            phone: this.refs.phone.value,
            email: this.refs.email.value
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => console.error(error));
        window.location.reload(); 
    }
    render() {
        return (
            <div className="row" >
                <h2 className="col s12 center" >Add a new Employee</h2>
                    <div className="col s11 center" style={{marginLeft:20}} onSubmit={this.submitEmployee.bind(this)}>
                    
                        <div className="input-field">
                            <input placeholder="Image" id="image" ref="image" type="text" className="validate" />
                            <label htmlFor="image">Image</label>
                        </div>
                        
                        <div className="input-field">
                            <input placeholder="First name" id="firstName" ref="firstName" type="text" className="validate" />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        
                        <div className="input-field" >
                            <input placeholder="Last name" id="lastName" ref="lastName" type="text" className="validate" />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                        
                        <div className="input-field" >
                            <input placeholder="Phone" id="phone" ref="phone" type="text" className="validate" />
                            <label htmlFor="phone">Phone</label>
                        </div>
                        
                        <div className="input-field">
                            <input placeholder="Email" id="email"  ref="email" type="text" className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div>
                            <button className="btn waves-effect waves-light" type="submit" name="action">Add</button>
                            <button className="waves-effect waves-light btn" onClick={this.deleteEmployee.bind(this)}>Delete</button>
                            <button className="waves-effect waves-light btn" onClick={this.updateEmployee.bind(this)}>Update</button>
                        </div>
                    </div>
            </div>    
        );
    }
}

export default EmployeeForm;
