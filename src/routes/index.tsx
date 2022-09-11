import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SignIn, SignUp } from '../pages';
import CreateJournal from '../pages/CreateJournal';

/**
 * @export
 * @component
 * @name Routes
 *
 *
 * @description
 * Page routes
 */

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/emptyjournal" component={CreateJournal} />
      </Switch>
    </BrowserRouter>
  );
};
