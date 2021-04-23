import React, { Component } from 'react';
import axios from 'axios';
import '../css/App.css';
import EmployeeSingle from './EmployeeSingle';
import EmployeeList from './EmployeeList';
import EmployeeForm from './EmployeeForm';

class App extends Component {

  constructor(){
    super ();
    this.state = {
      employees: [],
      currentEmployee: {}
    }
    this.updateCurrentEmployee = this.updateCurrentEmployee.bind(this);
  }

  componentDidMount(){
    const url = "http://localhost:4000/employees";
    axios.get(url).then(response => {
      this.setState({
        employees: response.data
      })
    }).catch(error => console.error(error));
  }

  updateCurrentEmployee = (item) => {
    this.setState({
      currentEmployee: item
    })

  }


  render(){
	  return(
		<div className="container-fluid">
			<div className="row">
				<nav>
					<div className="nav-wrapper blue darken-1">
						<a href="/" className="brand-logo" >Human Resources Department</a>
					</div>
				</nav>
			</div>
			<div className="row">
				 <div className="col s12 m3 l3 xl3"><EmployeeList employees={this.state.employees} updateCurrentEmployee={this.updateCurrentEmployee}/></div>
            			 <div className="col s12 m5 l3 xl3"><EmployeeSingle employee={this.state.currentEmployee}/></div>  
                                 <div className="col s12 m4 l6 xl6"><EmployeeForm employee={this.state.currentEmployee} /></div>
			</div>
		</div>
	  );
  }
}
export default App;
