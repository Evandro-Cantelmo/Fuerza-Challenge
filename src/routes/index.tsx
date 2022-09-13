import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  SignIn,
  SignUp,
  CreateJournal,
  ListJournal,
  ListNote,
  CreateNote,
  NoteViewer,
} from '../pages';

import PrivateRoute from './PrivateRoutes';

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

        <PrivateRoute exact path="/journallist" component={ListJournal} />
        <PrivateRoute path="/journallist/new" component={CreateJournal} />
        <PrivateRoute
          exact
          path="/journallist/:journalId"
          component={ListNote}
        />
        <PrivateRoute path="/note/new/:journalId" component={CreateNote} />
        <PrivateRoute
          path="/journallist/:journalId/:noteId"
          component={NoteViewer}
        />
      </Switch>
    </BrowserRouter>
  );
};
