import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
            <div class="grid-container">

                <div class="grid-child purple">
                    <a href="#">
                        <img src="https://media-exp1.licdn.com/dms/image/C510BAQGMqCfqIDH3ZQ/company-logo_200_200/0/1519856620161?e=2159024400&v=beta&t=mBqeHvJyiL-lB3IGXJDqv9JN52Wyd9e-uL6G4wBSYqU" height="65px" alt="CoolBrand" />

                    </a>
                </div>

                <div class="grid-child green">
                    <h3>Batch Analysis Dashboard</h3>
                </div>

            </div>


            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                   
                    <div id="navbar" className="navbar-collapse collapse" style={{marginLeft : '-13%',fontSize:"17px"}}>
                        <ul className="nav navbar-nav">
                            <li ><a href="#">Home</a></li>                            
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" 
                                aria-haspopup="true" aria-expanded="false">Finished Goods <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>                                   
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" 
                                aria-haspopup="true" aria-expanded="false">Raw Materials <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>                                   
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" 
                                aria-haspopup="true" aria-expanded="false">Raw Material Commonality Tables <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>                                   
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" 
                                aria-haspopup="true" aria-expanded="false"> Process Data <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>                                   
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" 
                                aria-haspopup="true" aria-expanded="false"> Batch Details <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>                                   
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" 
                                aria-haspopup="true" aria-expanded="false"> Support <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>                                   
                                </ul>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>

    );
}

export default Header; 