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
            <div className="row">
                <h1 className="center">Add a new Employee</h1>
                <form className="col s8" onSubmit={this.submitEmployee.bind(this)}>
                <div className="col s6"></div>                  
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Image" id="image" ref="image" type="text" className="validate" />
                            <label htmlFor="image">Image</label>
                        </div>
                        <div className="col s6"></div>
                        <div className="input-field col s6">
                            <input placeholder="First name" id="firstName" ref="firstName" type="text" className="validate" />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="col s6"></div>
                        <div className="input-field col s6">
                            <input placeholder="Last name" id="lastName" ref="lastName" type="text" className="validate" />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                        <div className="col s6"></div>
                        <div className="input-field col s6">
                            <input placeholder="Phone" id="phone" ref="phone" type="text" className="validate" />
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <div className="col s6"></div>
                        <div className="input-field col s6">
                            <input placeholder="Email" id="email"  ref="email" type="text" className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="col s7"></div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Add employee</button>
                    <button className="waves-effect waves-light btn" onClick={this.deleteEmployee.bind(this)}>Delete</button>
                    <button className="waves-effect waves-light btn" onClick={this.updateEmployee.bind(this)}>Update</button>
                    <div className="col s8"></div>
                </form>
            </div>
        );
    }
}

export default EmployeeForm;
