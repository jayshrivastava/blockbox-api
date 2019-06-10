import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import Start from "./Start";
import { Container } from "react-bootstrap";
import { createBrowserHistory } from 'history';

// Highest level parent container for all views, containers and components

interface IAppProps { }
interface IAppStates { }

class App extends Component<IAppProps, IAppStates> {
  constructor(props: any) {
    super(props);

    this.state = {
    };
  }

  render() {    
    return (
      <div className="App">
        <Router history={createBrowserHistory()}>
          <Route
            exact
            path="/"
            render={props => (
              <Container>
            <Start />
          </Container>
          )}
        />
        </Router>

      </div>
    );
  }
}

export default App;
