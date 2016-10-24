import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Main from './containers/Main';
import AboutPage from './components/AboutPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={Main}/>
  </Route>
);
