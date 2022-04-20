import React from 'react';
import './register.css'

export default function register() {
    return(
        <div className={"register"}>
            <p class = "title" align ="center">SIGN UP</p>
            <form class = "form">
                <label>
                    <input class = "email" type="email"
                           align = "center" placeholder= "Email"/>
                </label>
                <label>
                    <input className="password" type="password"
                           align="center" placeholder="Password"/>
                </label>
                <p class = "text" align = "left"> Are You A...
                <input type="checkbox" class="parent" name="parent" value="parent"/>
                    <label htmlFor="parent"> Parent</label>
                    <input type="checkbox" className="provider" name="provider" value="provider"/>
                    <label htmlFor="provider"> Provider</label></p>

                <p class = "text" align = "left"> Check The Box If You Agree To The Terms Of Services

                <input type="checkbox" align= "center" className="tos" name="tos" value="tos"/>
                <label htmlFor="tos" > </label> </p>
                <div>
                    <a className="submit" align="center">Sign Up</a>
                    <p class="li" align = "center">
                        <a href="#"/>Already Have an Account?</p>
                </div>
            </form>
        </div>
    )
}