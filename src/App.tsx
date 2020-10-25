import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";

import 'App.css';
import { NavBar } from 'components/Navbar/navbar';
import { Form } from 'components/Form/form';
// import { Result } from 'components/Step/result';

function App() {
  return (
    <div className="App">
      <NavBar/>

      <div className="container m-5 p-4">

        <Form/>

      {/*
        <Router>
          <Route exact path="/" component={Form} />
          <Route path="/result" component={Result} />
        </Router> */}
      </div>
    </div>
  );
}

export default App;
