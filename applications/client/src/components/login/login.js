import React, { Component, useEffect, useState } from "react"
import "./login.css"
import drumBaby from '../../images/drum (2) 1.png'
import abcdTeacher from '../../images/teacher (2) 1.png'
import { useParams, useNavigate, useLocation } from "react-router-dom"
export default function LogIn() {
    // allows us to be able to call for url to pass as json to server
    const {login} = useParams();
        //need to be able to get user input from form and update constant changes
        const [user, setUser] = useState( {
            email:"",
            password:"",
        });

        const navigate = useNavigate();
        //updating the constanst change that the user is doing through out the form
        //by setting the information that is in being passed over
        function handleChange(value){
           return setUser((prev)=>{
               return{...prev, ...value}
           })
    }
    //once user clicks on the submit button then we can get the url to be able

    function onSubmit(){
        // calling the server to be able to check if login info exsits
        const response = fetch(`http://localhost:3001/login/`, {
                 method: "POST",
                 headers: {
                     "Content-Type": "application/json",
                    },
                    //passing in the url as a json since we want a return after a post
                    //we need to pass as json
                    body: JSON.stringify(login),
                 });
                 //Once message from server is captured we will check what response
                 //we were given depending on that we stay in login or we go to signed in home page
                 if(!response){
                    navigate("/login")
                 }else{
                     navigate("/")
                 }
    }     


//e.preventDefault()

    return (
        <div className="log-in flex-col-hstart-vstart clip-contents">
            <div className="background flex-row-vstart-hstart">
                <div className="rectangle-3">
                    <p className="txt-957">Welcome Back</p>

                    <form className = "login" onSubmit={onSubmit}>

                        <input className="group-467 flex-row-vstart-hstart"
                               type = "email"
                               placeholder = "Email Address"
                               value = {user.email}
                               name="email"
                               onChange={(e)=>handleChange({email: e.target.value})}></input>
                        <input className="group-075 flex-row-vstart-hstart"
                               type = "password" 
                               placeholder = "Password"
                               value = {user.password}
                               name="password"
                               onChange={(e)=>handleChange({password: e.target.value})}></input>

                        <input type="checkbox" className ="checkbox"></input>
                        <label for="rmbme" className="txt-195">Remember me</label>
                            

                        <input className="frame-14 flex-row-vstart-hstart"
                               type = "submit"
                               value = "Log In"
                               //onClick={(e) => {login(e.preventDefault())}}
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
    );
}
