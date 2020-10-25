import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Step1 } from 'components/Step/step1';
import { Step2 } from 'components/Step/step2';
import { Step3 } from 'components/Step/step3';
import { Step4 } from 'components/Step/step4';
import { Step5 } from 'components/Step/step5';
import { Result } from 'components/Result/result';
import { Tickets } from 'components/Tickets/tickets';

import 'App.css';
import { NavBar } from 'components/Navbar/navbar';

function App() {
  return (
    <div className="App">
      <Router>

        <NavBar/>

        <div className="container m-5 p-5">
          <Switch>
            <Route exact path="/" component={Step1} />
            <Route path="/step2" component={Step2} />
            <Route path="/step3" component={Step3} />
            <Route path="/step4" component={Step4} />
            <Route path="/step5" component={Step5} />
            <Route path="/result" component={Result} />
            <Route path="/tickets" component={Tickets} />
          </Switch>
        </div>

      </Router>
    </div>
  );
}

export default App;
