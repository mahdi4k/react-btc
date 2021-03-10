import './App.css';
import './all.min.css';
import React from "react";
import {BrowserRouter as Router, Route , Switch} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OrderOpenScreen from "./screens/OrderOpenScreen";
import TradeHistory from "./screens/TradeHistoryScreen";
import OrderListScreen from "./screens/OrderListScreen";
import HomeScreen from "./screens/HomeScreen";
import PanelHomeScreen from "./screens/Panel/PanelHomeScreen"
function App() {
    return (

        <Router  >
            <Header/>
                <Switch>
                    <Route exact path='/' component={HomeScreen}/>
                    <Route exact path='/panel' component={PanelHomeScreen}/>
                    <Route path='/login' component={LoginScreen}/>
                    <Route path='/orderOpen' component={OrderOpenScreen}/>
                    <Route path='/tradeHistory' component={TradeHistory}/>
                    <Route path='/orderList' component={OrderListScreen}/>
                </Switch>
            <Footer/>
        </Router>

    );
}

export default App;
