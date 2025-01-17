import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Index";
import LoginPage from "./Pages/LoginPage/Index";
import RegisterPage from "./Pages/RegisterPage/Index";
import Merchandise from "./Pages/MerchandisePage/Index";
import MyAccount from "./Pages/MyAccountPage/Index";
import Transaction from "./Pages/TransactionPage/Index";
import TnC from "./Pages/TermsAndConditionsPage/Index";
import AboutUsPage from "./Pages/AboutUsPage/Index";
import MyTicket from "./Pages/MyTicketPage/Index";
import NotFound from "./Pages/PageNotFound/Index";
import { Provider } from "react-redux";
import KeepLogin from "./AppWrapper/KeepLogin";
import Register from "./Components/Register";
import { store } from "./Redux/Store";
import Login2 from "./Components/Login2";


// import axios from 'axios';
// import toast from 'react-hot-toast';

// import { useNavigate } from "react-router-dom";
// import { useState } from 'react';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <KeepLogin>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/merchandise" element={<Merchandise />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/termsandconditions" element={<TnC />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/myticket" element={<MyTicket />} />
            <Route path="/register2" element={<Register />} />
            <Route path="/login2" element={<Login2 />} />
            <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
        </KeepLogin>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
