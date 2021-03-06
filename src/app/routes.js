import React, {Fragment} from 'react';
import {Route, Redirect} from 'react-router-dom';
import Main from './components/main';
import Gallery from './components/gallery';
import Navigation from './components/navigation';

export default function Routes() {
  return (
    <Fragment>
      <Route path="/" render={() => <Redirect to="/home/" />} />
      <Route path="/home/" exact component={Main} />
      <Route path="/gallery/" exact component={Gallery} />
      <Route path="/navigation/" exact component={Navigation} />
    </Fragment>
  );
}
