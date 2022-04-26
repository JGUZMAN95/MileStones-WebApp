import React from "react"
import "./login.css"


export default function LogIn() {
    return (
        <div className="log-in flex-col-hstart-vstart clip-contents">
            <div className="background flex-row-vstart-hstart">
                <div className="rectangle-3" />
            </div>
            <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/imw3m18q89-517%3A4?alt=media&token=5f11bb1f-f053-4fdd-b6ad-7a69b4c74a37"
                alt="Not Found"
                className="drum-21"
            />
            <p className="txt-957">Welcome Back</p>

            <form class = "login">
                <input className="group-467" type = "email" placeholder = "Email Address"></input>
                <input className="group-075 flex-row" type = "password" placeholder = "Password"></input>
                    
                    <p className="txt-195">Remember me</p>
                <div className="toggle flex-col-hstart-vstart">
                    <div className="group-694">
                        <div className="ellipse-3" />
                    </div>
                </div>

                <input className="frame-14 flex-row-vstart-hstart" type = "submit" value = "Log In"></input>
            </form>
            
            {/* needs account recovery page */}
            <p className="txt-232">Forgot Password</p>

            <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/imw3m18q89-518%3A3?alt=media&token=f3d22b15-4785-44d2-8acd-180e2b50a73b"
                alt="Not Found"
                className="teacher-21"
            />
            <p className="txt-5107">Don’t have an account yet?</p>
            <p className="txt-192">Sign Up here!</p>
        </div>
    )
}
