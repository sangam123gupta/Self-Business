import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Private_route(props) {
  const { Component,cloude } = props;
  const login = localStorage.getItem("jwt");
  const Navigate = useNavigate()
  console.log("login",login)

  useEffect(()=>{
    if (login==null || login==undefined) {
      console.log("condition is true")
      Navigate('/login')
    }
  })

  return (
    <div><Component /></div>
  )
}
