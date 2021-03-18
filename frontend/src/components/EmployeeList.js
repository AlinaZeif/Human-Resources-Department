import React from 'react' 

const EmployeeList = (props) => {
    return ( 
    <div>
        <ul className="collection with-header">
            <li className="collection-header"><h4>Employees</h4></li>
            {props.employees.map(item=> (
                <a href="#!" className="collection-item" key={item._id}
                onClick={props.updateCurrentEmployee.bind(this, item)}>
                  {item.firstName} {item.lastName}
            </a>
            ))}
        </ul>
    </div> 
    );
}
 
export default EmployeeList;