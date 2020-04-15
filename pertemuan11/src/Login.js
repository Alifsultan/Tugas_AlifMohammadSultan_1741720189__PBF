import React, { useState, useContext, useCallback } from "react";
import {AuthContext} from "./index";
import * as firebase from "firebase";
import { GoogleLogin } from 'react-google-login';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState("");

    const Auth = useContext(AuthContext);
    const handleForm = e => {
    e.preventDefault();
    firebase
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .then(res => {
            if (res.user) Auth.setLoggedIn(true);
        }) 
        .catch(e =>{
            setErrors(e.message);
        });
    };
    
const responseGoogle = (response) => {
    console.log(response);
}
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit= {e => handleForm(e)}>
            <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                name="email"
                type="email"
                placeholder="email"    
            />
            <input
                onChange={e => setPassword(e.target.value)}
                name="password"
                value={password}
                type="password"
                placeholder="password"
            />
            <hr />
            
            <GoogleLogin
                 clientId="681943056485-cc7d0i19mhg5eoliaa1lha336ie76dq8.apps.googleusercontent.com"
                 buttonText="Login with google"
                 onSuccess={responseGoogle}
                 onFailure={responseGoogle}
                 cookiePolicy={'single_host_origin'}
            />
            <button type="submit">Login</button>
            <span>{error}</span>
            </form>
        </div>
    );
};


export default Login;