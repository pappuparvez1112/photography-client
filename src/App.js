import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home'
import Dashboard from './components/Dashboard/Dashboard/Dashboard'
import { createContext, useState } from 'react';
import AddService from './components/Dashboard/AddService/AddService';
import Clients from './components/Dashboard/Clients/Clients';
import Booking from './components/Booking/Booking/Booking'
import LogIn from './components/LogIn/LogIn/LogIn';
import PrivateRoute from './components/LogIn/PrivateRoute/PrivateRoute';
// import Login from './components/Login/Login/Login';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <PrivateRoute  path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route  path="/booking">
          <Booking></Booking>
        </Route>
        <Route  path="/addservice">
          <AddService></AddService>
        </Route>
        <Route  path="/clients">
          <Clients></Clients>
        </Route>
        <Route  path="/login">
          <LogIn></LogIn>
        </Route>
        
      </Switch>
    </Router>
  </UserContext.Provider>
  );
}

export default App;
