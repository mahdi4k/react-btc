import './App.css';
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Deposit from "./screens/Deposit";
import OrderOpen from "./screens/OrderOpen";

function App() {
    return (

        <Router>
            <Header/>
            <Route path='/login' component={LoginScreen}/>
            <Route path='/deposit' component={Deposit}/>
            <Route path='/orderOpen' component={OrderOpen}/>
            <Footer/>
        </Router>

    );
}

export default App;
