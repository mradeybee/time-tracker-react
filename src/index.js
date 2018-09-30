import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'

import App from './components/App';
import Home from './components/Home'

import store from './lib/store'

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path='/' component={Home} />
      </App>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))
