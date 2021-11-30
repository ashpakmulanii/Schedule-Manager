import React from 'react'
import { FaFacebook,FaTwitter,FaLinkedinIn } from 'react-icons/fa';
import { useState } from 'react';
import {Link,Navigate} from 'react-router-dom';

export const LoginForm = ({Validated}) => {
    const [username,setUsername]= useState("");
    const [userpass, setUserpass]= useState("");
    const submit = (e)=>{
        e.preventDefault();
        Validated(username,userpass);
    }

    return (
    <div className="container">
    <div className="row">
        <div className="col-md-6">
            <div className="card">
                <form onSubmit={submit}
            className="box">
                    <h1>Login</h1>
                    <p className="text-muted"> Please enter your login and password!</p>
                     <input type="text" name="" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username"/> 
                     <input type="password" name="" placeholder="Password" value={userpass} onChange={(e)=>setUserpass(e.target.value)}/> <a className="forgot text-muted" href="#">Forgot password?</a> 
                   <input type="submit" value="Login"/>
    
                </form>
            </div>
        </div>
    </div>
</div>
    )
}
