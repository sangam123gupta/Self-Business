import React, { useEffect, useState } from "react";
import { Link,useLocation } from "react-router-dom";
import {signin } from "../auth_functions/index"
export default function Login() {
    const [state, setState] = useState({
        password: String,
        email: String
    })
    const loaction=useLocation();

    console.log("location here  ",loaction.pathname)


    function sign_in() {

        signin(state).then((sign_data)=>{
            console.log("successfully signup",sign_data);
            if(window!=undefined){
                localStorage.setItem("jwt",sign_data.token)
            }
        }).catch((er)=>{
            console.log("not signup");
        })

    }
    console.log("set state data", state.email)
    return (

        <div>
            <form>
                <div className="form-outline mb-4 text-black-50" >
                    <input type="email" id="form2Example1" className="form-control"
                        onChange={(e) => setState({ ...state, email: e.target.value })} />
                    <label className="form-label" htmlFor="form2Example1">
                        Email address  </label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="form2Example2" className="form-control"
                        onChange={(e) => setState({ ...state, password: e.target.value })} />
                    <label className="form-label" htmlFor="form2Example2">
                        Password</label>
                </div>

                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value=""
                                id="form2Example31" checked />
                            <label className="form-check-label" htmlFor="form2Example31">
                                Remember me </label>
                        </div>
                    </div>

                </div>

                <button type="button" onClick={() => { sign_in() }} className="btn btn-primary btn-block mb-4">Sign in</button>

                <div className="text-center">
                    <p>Not a member? <Link to="/signup">Register</Link></p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                    </button>

                   

                </div>
            </form>
        </div>

    )
}