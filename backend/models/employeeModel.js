import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const EmployeeSchema= new Schema({
    image: { type: String, required: true },
    firstName: { type: String,  required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number },
    isCoach: {type: Boolean, default: false},
    team: { type: String },
    created_date: {type: Date, default: Date.now}
});
