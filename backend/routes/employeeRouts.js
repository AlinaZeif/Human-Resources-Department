import {
    addEmployee,
    getEmployees,
    getEmployeeWithId,
    updateEmployee,
    deleteEmployee
} from "../controllers/employeeController";

export const routes = (app) =>{
    app.route("/employees")
        .post(addEmployee)
        .get(getEmployees)
    app.route("/employee/:id")
        .get(getEmployeeWithId)
        .put(updateEmployee)
        .delete(deleteEmployee)
};
