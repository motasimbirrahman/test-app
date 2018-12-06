import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import AddCamera from "./Components/Camera/AddCamera";
import AllCamera from "./Components/Camera/AllCamera";
import SideNavigation from "./Components/SideNavigation";
import Header from "./Components/Header";
import AddImage from "./Components/Image/AddImage";
import LoginForm from "./Components/auth/LoginForm";
import Registraion from "./Components/auth/Registration";
import Image from './Components/Image/Image';
import "./App.css";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SideNavigation />
        <Header />

        <div className="container">
          <Switch>
            {/*<Route path="/" exact />*/}
            <Route path="/" component={Image}></Route>
            <Route path="/login" exact component={LoginForm}></Route>
            <Route path="/registration" exact component={Registraion}></Route>
            <Route path="/add/camera" exact component={AddCamera} />
            <Route path="/all/camera" exact component={AllCamera} />
            <Route path="/add/image" exact component={AddImage} />
          </Switch>
        </div>

      </React.Fragment>
    );
  }
}

export default App;
