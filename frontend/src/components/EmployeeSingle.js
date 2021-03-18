import React from 'react'

const EmployeeSingle = (props) => {
	return (
		<div className="row">
            <div className="col s4">
                <div className="card">
                    <div className="card-image" >
                        <img src="e105564b3126f12c02685ed7846f2b6f.jpeg" alt="e105564b3126f12c02685ed7846f2b6f.jpeg" ></img>
                        <span className="card-title"></span>
                    </div>
                    <div className="card-content" >
                        <p>Name: {props.employee.firstName==="Denis" ? props.employee.firstName : "-"}</p>
                        <p>Surname: {props.employee.lastName==="Vasilev"  ? props.employee.lastName : "-"}</p>
                        <p>Phone: {props.employee.phone===529784652 ? props.employee.phone : "-"}</p>
                        <p>Email: {props.employee.email==='foec9yu@gmail.com' ? props.employee.email : "-"}</p>
                    </div>
                    <div className="card-action">
                        <a href="#!">{props.employee.team}</a>
                    </div>
                </div>
            </div>
            <div className="col s4">
                <div className="card">
                    <div className="card-image">
                        <img src="Alina Zeif.jpeg" alt="AlinaZeif.jpeg" width="10%" height="560px"></img>
                        <span className="card-title">{props.employee.firstName==="Alina" ? props.employee.firstName : ""} {props.employee.lastName==="Zeif" ? props.employee.lastName : ""}</span>
                    </div>
                    <div className="card-content">
                        <p>Name: {props.employee.firstName==="Alina" ? props.employee.firstName : "-"}</p>
                        <p>Surname: {props.employee.lastName==="Zeif"  ? props.employee.lastName : "-"}</p>
                        <p>Phone: {props.employee.phone===524228195 ? props.employee.phone : "-"}</p>
                        <p>Email: {props.employee.email==="alinazeif@gmail.com" ? props.employee.phone : "-"}</p>
                    </div>
                    <div className="card-action">
                        <a href="#!">{props.employee.team}</a>
                    </div>
                </div>
            </div>
            <div className="col s4">
                <div className="card">
                    <div className="card-image">
                        <img src="image6.jpeg" alt="image6.jpeg" height="560px"></img>
                        <span className="card-title">{props.employee.firstName==="Robert" ? props.employee.firstName : ""} {props.employee.lastName==="Wrainsberg" ? props.employee.lastName : ""}</span>
                    </div>
                    <div className="card-content">
                        <p>Name: {props.employee.firstName==="Robert" ? props.employee.firstName : "-"}</p>
                        <p>Surname: {props.employee.lastName==="Wrainsberg"  ? props.employee.lastName : "-"}</p>
                        <p>Phone: {props.employee.phone===521653782 ? props.employee.phone : "-"}</p>
                        <p>Email: {props.employee.email==="robertwr@gmail.com" ? props.employee.email : "-"}</p>
                    </div>
                    <div className="card-action">
                        <a href="#!">{props.employee.team}</a>
                    </div>
                </div>
            </div>
        
            <div className="col s4">
                <div className="card">
                    <div className="card-image">
                        <img src="image2.jpeg" alt="image2.jpeg" height="315px"></img>
                        <span className="card-title">{props.employee.firstName==="Li" ? props.employee.firstName : ""} {props.employee.lastName==="Chan" ? props.employee.lastName : ""}</span>
                    </div>
                    <div className="card-content">
                        <p>Name: {props.employee.firstName==="Li" ? props.employee.firstName : "-"}</p>
                        <p>Surname: {props.employee.lastName==="Chan"  ? props.employee.lastName : "-"}</p>
                        <p>Phone: {props.employee.phone===549234671 ? props.employee.phone : "-"}</p>
                        <p>Email: {props.employee.email==="lichan@gmail.com" ? props.employee.email : "-"}</p>
                    </div>
                    <div className="card-action">
                        <a href="#!">{props.employee.team}</a>
                    </div>
                </div>
            </div>
            <div className="col s4">
                <div className="card">
                    <div className="card-image">
                        <img src="image4.jpeg" alt="image4.jpeg" ></img>
                        <span className="card-title">{props.employee.firstName==="Rebekka" ? props.employee.firstName : ""} {props.employee.lastName==="Foretti" ? props.employee.lastName : ""}</span>
                    </div>
                    <div className="card-content">
                        <p>Name: {props.employee.firstName==="Rebekka" ? props.employee.firstName : "-"}</p>
                        <p>Surname: {props.employee.lastName==="Foretti"  ? props.employee.lastName : "-"}</p>
                        <p>Phone: {props.employee.phone===505943127 ? props.employee.phone : "-"}</p>
                        <p>Email: {props.employee.email==="refo@gmail.com" ? props.employee.email : "-"}</p>
                    </div>
                    <div className="card-action">
                        <a href="#!">{props.employee.team}</a>
                    </div>
                </div>
            </div>
            <div className="col s4">
                <div className="card">
                    <div className="card-image">
                        <img src="image5.jpeg" alt="image5.jpeg" ></img>
                        <span className="card-title">{props.employee.firstName==="Joan" ? props.employee.firstName : ""} {props.employee.lastName==="Slimsky"  ? props.employee.lastName : ""}</span>
                    </div>
                    <div className="card-content">
                        <p>Name: {props.employee.firstName==="Joan" ? props.employee.firstName : "-"}</p>
                        <p>Surname: {props.employee.lastName==="Slimsky"  ? props.employee.lastName : "-"}</p>
                        <p>Phone: {props.employee.phone===549231645 ? props.employee.phone : "-"}</p>
                        <p>Email: {props.employee.email==="msjoans@gmail.com" ? props.employee.email : "-"}</p>
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