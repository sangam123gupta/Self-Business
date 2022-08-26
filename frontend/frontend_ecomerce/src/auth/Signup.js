import React, { useState } from "react";
import {signup } from "../auth_functions/index"
const Signup = () => {
    const [state,setState]=useState({
        email:'',
        password:'',
        name:'',
        repeat_password:''
    })

    const handleClick=name=>(event)=>{

        
        setState({...state,[name]:event.target.value})

    }

    const submit=()=>{
        console.log("state",state)
        if(state.password==state.repeat_password){
            signup({
                name:state.name,
                email:state.email,
                password:state.password
            }).then((response)=>{
                console.log("succesfully signup",response);
                setState({...state,email:'',
            password:'',
            repeat_password:'',
            name:''
            })
            })
        }else{
            console.log("password and repeat passeword is not match")
        }

    }

    return (

        <div>
        <div>
            <form>
            <div className="form-outline mb-4 text-black-50" >
                    <input type="text" id="name" className="form-control"
                    value={state.name || '' }
                onChange={handleClick("name")}
 />
                    <label className="form-label" htmlFor="form2Example2">
                        name</label>
                </div>
                <div className="form-outline mb-4 text-black-50" >
                    <input type="email" id="email" className="form-control"
                    value={ state.email ||'' }
                onChange={handleClick("email")}
 />
                    <label className="form-label" htmlFor="form2Example2">
                        Email</label>
                </div>

                <div className="form-outline mb-4 text-black-50" >
                    <input type="password" id="password" className="form-control"
                    value={state.password || '' }
                    onChange={handleClick("password") }
 />
                    <label className="form-label" htmlFor="form2Example2">
                        Password</label>
                </div>
                <div className="form-outline mb-4 text-black-50" >
                    <input type="email" id="repeat_password" className="form-control"
                    value={state.repeat_password ||'' }
                    onChange={handleClick("repeat_password")}
 />
                    <label className="form-label" htmlFor="form2Example2">
                        Repeat Password</label>
                </div>

                <button type="button" onClick={submit} className="btn btn-primary btn-block mb-4">Signup</button>


            </form>
        </div>

        </div>


    )
}

export default Signup;