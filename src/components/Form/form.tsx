import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Step1 } from 'components/Step/step1';
import { Step2 } from 'components/Step/step2';
import { Step3 } from 'components/Step/step3';
import { Step4 } from 'components/Step/step4';
import { Step5 } from 'components/Step/step5';
import { Result } from 'components/Step/result';

export const Form: React.FC = () => {


  return (
    <div>
      <h4>Answer some simple question to get a better ticket suggestion </h4>

      <div className="m-5">

        <Router>
          <Route exact path="/" component={Step1} />
          <Route path="/step2" component={Step2} />
          <Route path="/step3" component={Step3} />
          <Route path="/step4" component={Step4} />
          <Route path="/step5" component={Step5} />
          <Route path="/result" component={Result} />
        </Router>

      </div>

    </div>
  );
};
