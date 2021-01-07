import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify'
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react"

function Header() {


    //For rendering state
    const [cognitoUser, updateCognitoUser] = useState([]); //Will create an empty Array, to be updated by updatePeople
    async function getCognitoUser() {

        /*
        Auth.currentAuthenticatedUser()
          .then(data => {console.log(data); updateCognitoUser(data.CognitoUser)})
          .catch(err => console.log(err)); 
         */
        try {
            console.log("ZZZZZZZZZZZZZZZ");
            const cognitoUserData = await Auth.currentAuthenticatedUser();
            //When data is returned, update
            updateCognitoUser(cognitoUserData['attributes']['email']);
            console.log('cognitoUserData==: ', cognitoUserData['attributes']['email']);
        }
        catch (err) {
            console.log({ err })
        }

    }

    useEffect(() => {
        getCognitoUser()
    }, [])

    return (
        <>
            <div className="grid-container-user ml-2">
                <div className="grid-child  text-left">
                    <label className="ml-2 mt-2">User: {cognitoUser}</label>
                 </div>
                <div className="grid-child text-right mt-2" style={{width:"5%"}}> 
                     <AmplifySignOut />
                </div>

            </div>


            <div className="grid-container ml-2">

                <div className="grid-child">
                    <a href="#">
                        <img src="https://media-exp1.licdn.com/dms/image/C510BAQGMqCfqIDH3ZQ/company-logo_200_200/0/1519856620161?e=2159024400&v=beta&t=mBqeHvJyiL-lB3IGXJDqv9JN52Wyd9e-uL6G4wBSYqU" height="65px" alt="CoolBrand" />

                    </a>
                </div>

                <div className="grid-child text-left">
                    <h2 >Batch Visibility Dashboard</h2>
                </div>

            </div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">

                    <div id="navbar" className="navbar-collapse collapse" style={{ marginLeft: '-13%', fontSize: "17px" }}>
                        <ul className="nav navbar-nav">
                            <li>  <Link to="/home" className="nav-link">Home</Link>  </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link px-4" href="#" id="navbardrop" data-toggle="dropdown" style={{ color: "#ffff" }}>
                                    Production Boards
                                </a>
                                <div className="dropdown-menu  bg-primary dropown-custom">
                                    <a className="dropdown-item dropdwown-color" href="/productionstatusboard">Production Status</a> <br></br>
                                    <a className="dropdown-item dropdwown-color" href="/productionstatusboard">Queue Time</a>
                                </div>
                            </li>
                            <li>  <Link to="/qcstatusboard" className="nav-link">QC Status </Link>  </li>
                            <li>  <Link to="/salesstatusboard" className="nav-link">Sales Bacth Status </Link> </li>
                            <li>  <Link to="/salesstatusboard" className="nav-link px-4">Planning Status </Link> </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>

    );
}

export default withAuthenticator(Header); 