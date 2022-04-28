import React from "react"
import "./register.css"
import blockBaby from '../../images/playtime (1) 1.png'
import basketBro from '../../images/basketball-1.png'
import facebookIcon from '../../images/facebook-1.png'
import googleIcon from '../../images/search-1.png'

export default function CreateAccount() {
    return (
        <div className="create-account flex-col-hstart-vstart clip-contents">
            <div className="group-17">
                <div className="group-3"></div>
            </div>

            <p className="txt-209">OR</p>
            <p className="txt-9109">Create Account</p>
            <div className="sign-up-with-google flex-row-vstart-hstart">
                <img
                    src= {googleIcon}
                    alt="Not Found"
                    className="search-1"
                />
                <p className="txt-3610">Sign up with Google </p>
            </div>
            <div className="sign-up-with-facebook flex-row-vstart-hstart">
                <img
                    src={facebookIcon}
                    alt="Not Found"
                    className="facebook-1"
                />
                <p className="txt-3610">Sign up with Facebook </p>  
            </div>

            <form >
                <input className="frame-3 flex-row-vstart-hstart txt-348" type = 'text' placeholder = 'Full Name'></input>
                <input className="frame-5 flex-row-vstart-hstart txt-348" type = 'email' placeholder = 'Email Address'></input>
                <input className="frame-4 flex-row-vstart-hstart txt-348" type = 'password' placeholder = 'Password'>
                    {/* <img
                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/1yminuy1bia-514%3A72?alt=media&token=5cfa9cfd-75c2-4322-bdc8-3a4d779f84d9"
                        alt="Not Found"
                        className="visibility-22"
                    /> */}
                </input>
                <p className="txt-269">Are you a Parent or Provider?</p>
                <input className = 'rectangle-8' type = 'submit' value = 'Sign Up'></input>
                
            </form>

            <img
                src={basketBro}
                alt="Not Found"
                className="basketball-1"
            />

            <p className="txt-335">Already have an account?</p>
            <a className="txt-721" href = './login'>Log In here</a>
            <img
                src={blockBaby}
                alt="Not Found"
                className="playtime-11"
            />
            <div className="signup-parent-provider flex-col-hstart-vstart">
                <p className="txt-160">Parent</p>
                <div className="group-1016 flex-row">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/1yminuy1bia-I542%3A202%3B542%3A182?alt=media&token=3773bb17-5ad8-4e8a-b591-908e07f89d34"
                        alt="Not Found"
                        className="rectangle-11"
                    />
                    <p className="txt-525">Provider</p>
                </div>
            </div>
        </div>
    )
}
