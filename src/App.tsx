import React from 'react';

import 'App.css';
import { NavBar } from 'components/Navbar/navbar';
import { Form } from 'components/Form/form';

function App() {
  return (
    <div className="App">
      <NavBar/>

      <div className="container m-5 p-4">

        <Form/>

      </div>
    </div>
  );
}

export default App;
