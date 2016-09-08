/**
  * Copyright (C) 2016 yanni4night.com
  * index.js
  *
  * changelog
  * 2016-09-07[20:58:09]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
'use strict';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import React from 'react';
import {render} from 'react-dom';
import Home from './page/home.jsx';
import {Provider, connect} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';

const HomePage = connect(state => state)(Home);

const store = createStore(combineReducers({
  routing: routerReducer
}));

const history = syncHistoryWithStore(hashHistory, store);

render((
<Provider store={store}>
      <Router history={history}>
          <Route path="/" component={HomePage}/>
      </Router>
</Provider>
), document.querySelector('#preact-root'));