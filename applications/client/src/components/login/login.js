import React, { useState } from "react"
import "./login.css"
import drumBaby from '../../images/drum (2) 1.png'
import abcdTeacher from '../../images/teacher (2) 1.png'
import {useNavigate} from "react-router";
//import bcrypt from "bcryptjs";

    export default function LogIn() {
        const navigate = useNavigate();
        const bcrypt = require('bcryptjs');

        const [form, setForm] = useState( {
            email:"",
            password:"",
        });

        function updateForm(value){
            form.passwordHash = bcrypt.hashSync(form.password, 10);
            return setForm((prev)=>{
                return{...prev, ...value};
            });
        }

        async function onSubmit(e) {
            e.preventDefault();

            return('Loading...');
            //need to work out hash
            const login  = {...form};
            await fetch('http://localhost:3001/loginInfo/',{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(login)
            })
                .catch(error => {
                    window.alert(error);
                    return;
                });

            //loggedin home
            navigate("/")
        }


    return (
        <div className="log-in flex-col-hstart-vstart clip-contents">
            <div className="background flex-row-vstart-hstart">
                <div className="rectangle-3">
                    <p className="txt-957">Welcome Back</p>

                    <form className = "login">
                        <input className="group-467 flex-row-vstart-hstart"
                               type = "email"
                               placeholder = "Email Address"
                               value = {form.email}
                               onChange={(e) => updateForm({email: e.target.value})}
                        ></input>
                        <input className="group-075 flex-row-vstart-hstart"
                               type = "password" placeholder = "Password"
                               value = {form.password}
                               onChange={(e) => updateForm({password: e.target.value})}
                        ></input>

                        <input type="checkbox" className ="checkbox"></input>
                        <label for="rmbme" className="txt-195">Remember me</label>
                            

                        <input className="frame-14 flex-row-vstart-hstart"
                               type = "submit"
                               value = "Log In"
                               onSubmit={onSubmit}
                        ></input>
                    </form>

                    {/* needs account recovery page */}
                    <p className="txt-232">Forgot Password</p>

                    <img
                        src= {abcdTeacher}
                        alt="Not Found"
                        className="teacher-21"
                    />
                    <p className="txt-5107">Don’t have an account yet?</p>
                    <a className="txt-192" href = './register'>Sign Up here!</a>
                </div>
            </div>
            <img
                src={drumBaby}
                alt="Not Found"
                className="drum-21"
            />
            
        </div>
    )
}
