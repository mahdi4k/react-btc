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
import PanelFaqScreen from "./screens/Panel/PanelFaqScreen";
import PanelDigitalCurrenciesScreen from "./screens/Panel/PanelDigitalCurrenciesScreen";
import PanelNotificationScreen from "./screens/Panel/PanelNotificationScreen";
function App() {
    return (

        <Router>
            <Header/>
                <Switch>
                    <Route exact path='/' component={HomeScreen}/>
                    <Route exact path='/panel' component={PanelHomeScreen}/>
                    <Route exact path='/panel/faq' component={PanelFaqScreen}/>
                    <Route exact path='/panel/DigitalCurrencies' component={PanelDigitalCurrenciesScreen}/>
                    <Route exact path='/panel/Notification' component={PanelNotificationScreen}/>
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
