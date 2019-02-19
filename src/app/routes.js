import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import Main from './components/main';
import Gallery from './components/gallery';

export default function Routes() {
  return (
    <Fragment>
      <Route path="/" exact component={Main} />
      <Route path="/gallery/" exact component={Gallery} />
    </Fragment>
  );
}
