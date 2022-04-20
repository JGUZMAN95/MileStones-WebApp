import React from 'react';
import './login.css'

export default function Login() {
    return(
        <div className={"Login"}>
            <p class = "title" align ="center">SIGN IN</p>
            <form class = "form">
            <label>
                <input class = "email" type="email"
                align = "center" placeholder= "Email"/>
            </label>
            <label>
                <input className="password" type="password"
                       align="center" placeholder="Password"/>
            </label>
            <div>
                <a className="submit" align="center">Sign In</a>
                <p class="link" align = "center">
                    <a href="#"/>Don't Have An Account?</p>
            </div>
        </form>
        </div>
    )
}