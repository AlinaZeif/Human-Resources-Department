import mongoose from "mongoose";
import {EmployeeSchema} from "../models/employeeModel";

const Employee = mongoose.model ("Employee", EmployeeSchema);

//ADD
export const addEmployee = (req, res)=>{
	let newEmployee = new Employee(req.body);
	newEmployee.save((err, employee)=>{
		if (err) {
			res.send(err);
		}
		res.json(employee);
	})
}

// GET All
export const getEmployees = (req, res) => {
    Employee.find({}, (err, employee) => {
        if (err) {
            res.send(err);
        }
        res.json(employee);
    })
}

// GET One
export const getEmployeeWithId = (req, res) => {
    Employee.findById(req.params.id,(err, employee) => {
        if (err) {
            res.send(err);
        }
        res.json(employee);
    })
}

// Update One
export const updateEmployee = (req, res) => {
    Employee.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, employee) => {
        if (err) {
            res.send(err);
        }
        res.json(employee);
    })
}

// Delete One
export const deleteEmployee = (req, res) => {
    Employee.remove({_id: req.params.id}, (err, employee) => {
        if (err) {
            res.send(err);
        }
        res.json({message: "Successfully deleted a employee"});
    })
}
