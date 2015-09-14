import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import App from 'components/App';
import Home from 'components/Home';
import Hello from 'components/Hello';

React.render((
  <Router history={createBrowserHistory()}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='hello/:name' component={Hello} />
    </Route>
  </Router>
), document.getElementById('app'));
