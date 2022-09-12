import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SignIn, SignUp } from '../pages';
import CreateJournal from '../pages/CreateJournal';
import ListJournal from '../pages/ListJournal';

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
        <Route path="/journallist" component={ListJournal} />
        <Route path="/createjournal" component={CreateJournal} />
      </Switch>
    </BrowserRouter>
  );
};
