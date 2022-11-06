import logo from './logo.svg';
import React from 'react';
import './App.css';
import Login from './auth/Login';
import List from './component/List';
import Create from './component/Create';
import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom'
import { history } from './component/History';
import Header from "./component/Header";
import Signup from './auth/Signup';
import Admin_dash from './component/Admin_dash';
import User_dash from './component/User_dash';
import Private_route from './private_route';
import Payment from './component/Payment';
function App() {
  // localStorage.setItem("jwt","tikt")
  return (
    <div className="App">
      <React.Fragment>
        <BrowserRouter>
          <React.Fragment>
            <Header />
            <Routes history={history}>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/create" element={<Private_route Component={Create} />} />
              <Route exact path="/list" element={<Private_route Component={List} /> } />
              {/* <Route exact path="/list" element={< List /> } /> */}
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/pay" element={<Private_route Component={Payment} />} />
              <Route exact path="/admin_dash" element={<Private_route Component={Admin_dash}
              />} />
              <Route exact path="/" element={<User_dash />} />
            </Routes>
          </React.Fragment>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;
