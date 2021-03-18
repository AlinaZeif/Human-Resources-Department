import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {routes} from "./routes/employeeRouts";

const app = express();
const PORT = 4000;
const HOST = "localhost";

//Connecting mongoose
mongoose.Promise= global.Promise;
mongoose.connect("mongodb://localhost/HumanResources",{useNewUrlParser: true, useUnifiedTopology: true});

app.use (bodyParser.urlencoded({extended: true}));
app.use (bodyParser.json());
app.use(cors());
routes(app);


app.get("/", (req, res)=>{
	res.send(`The server is running on port`)
});

app.listen(PORT, HOST, ()=>{
	console.log (`The server is running on port ${PORT}`);
})