import './App.css';
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (

        <Router>
            <Header/>
            <Route path='/login' component={LoginScreen}/>
            <Footer/>
        </Router>

    );
}

export default App;
