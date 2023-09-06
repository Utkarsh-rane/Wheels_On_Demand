import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../Session/Session';
import SignIn from './../SignIn/SignIn';

const Logout = () => {

   
    const history = useHistory();
    const {value,setValue} = useContext(UserContext)
    
    return (
        <center className="bg-colo1">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>Thank You !!</h1>
            <br></br>
            <h3>Visit Again...... </h3>
            <br></br><br></br>
            <a href="/"><button className='btn btn-success' >Home</button></a>
        </center>
    )
    setValue(null)
}


export default Logout
