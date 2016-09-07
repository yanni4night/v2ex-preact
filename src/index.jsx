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
import Router from 'preact-router';
import {h, render} from 'preact';
import Home from './page/home.jsx';
//import {Provider, connect} from 'react-redux';
//import {createStore, combineReducers} from 'redux';
//import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
/** @jsx h */

//const HomePage = connect()(Home);

/*const store = createStore(combineReducers({
  routing: routerReducer
}));

const history = syncHistoryWithStore(browserHistory, store);*/

const Main = () => (
      <Router>
          <Home path="/"/>
      </Router>
);

render(<Main/>, document.querySelector('#preact-root'));