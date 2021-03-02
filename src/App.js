import './App.css';
import './all.min.css';
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OrderOpenScreen from "./screens/OrderOpenScreen";
import TradeHistory from "./screens/TradeHistoryScreen";
import OrderListScreen from "./screens/OrderListScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
    return (

        <Router>
            <Header/>
            <Route path='/' component={HomeScreen}/>
            <Route path='/login' component={LoginScreen}/>
            <Route path='/orderOpen' component={OrderOpenScreen}/>
            <Route path='/tradeHistory' component={TradeHistory}/>
            <Route path='/orderList' component={OrderListScreen}/>
            <Footer/>
        </Router>

    );
}

export default App;
