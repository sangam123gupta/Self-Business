import React, { useEffect, useState } from "react";
import {Link } from "react-router-dom";
import { signout } from "../auth_functions/index"


const Header=()=>{

  const [value,setValue]=useState()
 function sign_out(){
  signout().then((dr)=>{
    console.log("drrr",dr)
  })
  }

  function fetch_api(){
    
  }

useEffect(()=>{

  // let api='https://jsonplaceholder.typicode.com/users/?=asc'
  // fetch(api).then((data)=>{return data.json()}).then((json_data)=>{
  //   console.log(json_data);
  //   let new_arr=[]
  //   let j=0
  //   for(let i=json_data.length-1;i>=0;i--){
  //     new_arr[j]=json_data[i]
  //     j=j+1
  //   }
  //   console.log(new_arr)
  // })

  fetch("http://localhost:5500/list",{method:"GET"}).then((data)=>{
    console.log("json data -->",data);
  })
})

    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul style={{ gap: "50px",
    display: "flex" }} class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" onClick={fetch_api} >Home </a>
      </li>
      <li class="nav-item">
        <Link class="btn btn-primary"  to="/login">signin</Link>
      </li>
      <li class="nav-item">
        <Link class="btn btn-primary" to="/signup">signup</Link>
      </li>
      <li class="nav-item">
        <Link class="btn btn-primary" to="/create">Add</Link>
      </li>
      <li class="nav-item">
        <Link class="btn btn-primary" to="/list">List</Link>
      </li>
      <li class="nav-item">
        <button class="btn btn-warning" onClick={sign_out} >signout</button>
      </li>

      {/* <li class="nav-item">
        <button class="btn btn-warning"  >Add</button>
      </li> */}
    </ul>
  </div>
</nav>
    )
}

export default Header;