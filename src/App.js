import './App.css';
import './all.min.css';
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OrderOpen from "./screens/OrderOpen";
import TradeHistory from "./screens/TradeHistory";
import OrderList from "./screens/OrderList";

function App() {
    return (

        <Router>
            <Header/>
            <Route path='/login' component={LoginScreen}/>
            <Route path='/orderOpen' component={OrderOpen}/>
            <Route path='/tradeHistory' component={TradeHistory}/>
            <Route path='/orderList' component={OrderList}/>
            <Footer/>
        </Router>

    );
}

export default App;
