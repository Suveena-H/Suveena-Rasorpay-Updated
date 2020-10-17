import React, { Component } from 'react'
import { BrowserRouter, Switch, Route} from "react-router-dom";
import FinalPage from "./Component/FinalPage/FinalPage";
import Home from "./Component/Home/Home";
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/finalpage" component={FinalPage} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

