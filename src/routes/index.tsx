import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SignIn, SignUp, CreateJournal, ListJournal, ListNote, CreateNote } from '../pages';

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
        <Route path="/journalnote" component={ListNote} />
        <Route path="/createjournal" component={CreateJournal} />
        <Route path="/createnote" component={CreateNote} />
      </Switch>
    </BrowserRouter>
  );
};
