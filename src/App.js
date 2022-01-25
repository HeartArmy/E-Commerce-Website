import React, {useEffect, useState} from "react";
import './App.css';
import Header from './components/Header';
import Home from "./pages/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import {auth} from "./Firebase";
import {useStateValue} from './StateProvider';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from './pages/Orders';
import Address from './pages/Address';
import Admin from "./pages/Admin";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

const promise =loadStripe(
  "pk_test_51ILWDZCmEdf7631BOU11y8GzccBCTmpJLqE6ztjzlcyTEJqxXSH2WFipnMIFJqh1Bdlx8XQgJsdVG7vCUsbbALS000hcexQxhm");


function App() {
  const [{basket}, dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })
    if(localStorage.getItem("basket")!=null){
      const localbasket = JSON.parse(localStorage.getItem("basket"))
      localbasket.forEach(element => {
        basket.push(element)
      });
    }
  }, [])
  
  

  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/orders">
            <Header />
            <Orders />
        </Route>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            
          </Route>
          <Route path="/address">
              <Header />
              <Address />
          </Route>
          <Route path="/admin">
              <Header />
              <Admin />
          </Route>
          <Route path="/dashboard">
            <Header />
            <Dashboard />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
