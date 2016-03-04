/* @flow */

import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import routes from './routes';
import { Adrenaline } from 'adrenaline';

const history = createBrowserHistory();

const rootNode = document.getElementById('root');
ReactDOM.render(
  <Adrenaline>
    <Router history={history} routes={routes} />
  </Adrenaline>,
  rootNode
);
