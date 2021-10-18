import React, { useState } from "react";
import "./App.css";
import NavigationBar from "./components/navbar/Ui/NavbarUi";
import Login from "./components/login/containers/Login";
import Ride from "./components/Ride/container/Ride";
import Vehical from "./components/Vehical/container/Vehical";
import EditVehical from "./components/Vehical/container/EditVehical";
import Home from "./components/Home/Ui/home";
import Hero from "./components/Home/Ui/hero";
import SearchRide from "./components/FindRide/container/SearchRides";
import Ridehistory from "./components/RideHistory/Ui/rideHistoryUi";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Dashboard from "./components/Dashboard/Ui/dashboard";
import SignUp from "./components/sign_up/container/SignUp";
import ChangePasswordUi from "./components/login/Ui/changePasswordUi";
import ActiveRide from "./components/Dashboard/Ui/activeRide";
import AdminDashboardUi from "./components/Admin/Ui/adminDashboardUi";
import ProtectedRoute from "./config/protectedRoute";
import protectedRouteApi from "./config/protectedRouteApi";
import ReportBack from "./components/Admin/Ui/reportBack";
import { ContextOne } from "../src/components/contexts/contexts";
import UnblockUserUi from "./components/Admin/Ui/UnblockUserUi";
function App() {
 
  let { state, dispatch } = React.useContext(ContextOne);
  return (
    <div className="App">
      <header className="App-header">
        <React.Fragment>
          {state.userData.email === "gocotravel917@gmail.com" ? (
            <Router>
              <Route
                exact
                path="/AdminDashboard"
                component={AdminDashboardUi}
              />
              <Route path="/Login" component={Login} />
              <Route path="/UnblockUserUi/:userId" component={UnblockUserUi} />
              <Route
                  exact
                  path="/reportDel/:reportId"
                  component={ReportBack}
                />
            </Router>
          ) : (
            <Router>
              <NavigationBar />

              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Login" component={Login} />
                <Route path="/Signup" component={SignUp} />
                <Route path="/Ride" component={Ride} />
                <Route path="/Searchride" component={SearchRide} />
                <Route path="/rideHistory" component={Ridehistory} />
                <Route path="/Dashboard" component={Dashboard} />
                <Route path="/Vehical" component={Vehical} />
                <Route path="/EditVehical" component={EditVehical} />
                <Route
                  exact
                  path="/reset/:token"
                  component={ChangePasswordUi}
                />
                
                <Route exact path="/activeRide" component={ActiveRide} />
              </Switch>
            </Router>
          )}
        </React.Fragment>
      </header>
    </div>
  );
}

export default App;
