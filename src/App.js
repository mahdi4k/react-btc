import './App.css';
import './all.min.css';
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
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
import PanelReffralsScreen from "./screens/Panel/PanelReffralsScreen";
import PanelProfileScreen from "./screens/Panel/PanelProfileScreen";
import PanelPaymentScreen from "./screens/Panel/PanelPaymentScreen";
import PanelInvoiceScreen from "./screens/Panel/PanelInvoiceScreen";
import PanelSystemActivityScreen from "./screens/Panel/PanelSystemActivityScreen";
import PanelMailBoxMessageScreen from "./screens/Panel/PanelMailBoxMessageScreen";
import PanelMailBoxComposeScreen from "./screens/Panel/PanelMailBoxComposeScreen";
import PanelMailBoxScreen from "./screens/Panel/PanelMailBoxScreen";
import PanelVerificationScreen from "./screens/Panel/PanelVerificationScreen";
import PanelAuthenticationScreen from "./screens/Panel/PanelAuthenticationScreen";
import PanelWalletScreen from "./screens/Panel/PanelWalletScreen";
import PanelWithdrawallistScreen from "./screens/Panel/PanelWithdrawallistScreen";
import PanelTransActionHistoryScreen from "./screens/Panel/PanelTransActionHistoryScreen";
import PanelDepositListScreen from "./screens/Panel/PanelDepositListScreen";

function App() {
    return (

        <Router>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomeScreen}/>
                <Route exact path='/panel' component={PanelHomeScreen}/>
                <Route exact path='/panel/faq' component={PanelFaqScreen}/>
                <Route exact path='/panel/reffrals' component={PanelReffralsScreen}/>
                <Route exact path='/panel/profile' component={PanelProfileScreen}/>
                <Route exact path='/panel/market' component={PanelDigitalCurrenciesScreen}/>
                <Route exact path='/panel/wallet' component={PanelWalletScreen}/>
                <Route exact path='/panel/TransActionHistory' component={PanelTransActionHistoryScreen}/>
                <Route exact path='/panel/withdrawallist' component={PanelWithdrawallistScreen}/>
                <Route exact path='/panel/Notification' component={PanelNotificationScreen}/>
                <Route exact path='/panel/Authentication' component={PanelAuthenticationScreen}/>
                <Route exact path='/panel/systemactivity' component={PanelSystemActivityScreen}/>
                <Route exact path='/panel/payment' component={PanelPaymentScreen}/>
                <Route exact path='/panel/invoice' component={PanelInvoiceScreen}/>
                <Route exact path='/panel/depositlist' component={PanelDepositListScreen}/>
                <Route exact path='/panel/mailbox-compose' component={PanelMailBoxComposeScreen}/>
                <Route exact path='/panel/mailbox-message' component={PanelMailBoxMessageScreen}/>
                <Route exact path='/panel/verification' component={PanelVerificationScreen}/>
                <Route exact path='/panel/mailbox' component={PanelMailBoxScreen}/>
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
