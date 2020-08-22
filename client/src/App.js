import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import sueQuestions from "./components/sets/sueQuestions.component";
import Presidents from "./components/sets/presidents.component";
import Questions from "./components/sets/questions.component";
import PresInfo from "./components/info/presinfo.component";
import MyStats from "./components/info/mystats.component";
import Landing from "./components/landing.component";
import Signup from "./components/signup.component";
import Logout from "./components/logout.component";
import Login from "./components/login.component";
import Users from "./components/users.component";
import Play from "./components/play.component";
import Era from "./components/info/eraInfo.component";

class App extends Component {

  state = {
    userID: "",
    loggedIn: false,
    userObject: {},
    redirectTo: null
  }

  componentDidMount() {
    if (localStorage.getItem('loginData')) {
      this.setState({
        userID: (JSON.parse(localStorage.getItem('loginData')))
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact
              path="/"
              render={() => {
                return (
                  (localStorage.getItem('loginData')
                    ?
                    < Redirect to={{
                      pathname: "/play",
                      state: { id: JSON.parse(localStorage.getItem('loginData')) }
                    }} />
                    :
                    < Redirect to="/landing" />
                  )
                )
              }}
            />
            <Route path="/questions" component={Questions} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/mystats" component={MyStats} />
            <Route path="/signup" component={Signup} />
            <Route path="/landing" component={Landing} />
            <Route path="/sueQuestions" component={sueQuestions} />
            <Route path="/presidents" component={Presidents} />
            <Route path="/presinfo" component={PresInfo} />
            <Route path="/users" component={Users} />
            <Route path="/play" component={Play} />
            <Route path="/era" component={Era} />
          </Switch>
        </Router>
      </div >
    );
  }
}

export default App;