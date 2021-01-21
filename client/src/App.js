import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
import SavedList from "./pages/SavedList";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Nav />
          <Jumbotron />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/saved" component={SavedList} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
