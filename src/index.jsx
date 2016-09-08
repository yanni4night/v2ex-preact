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
import Latest from './page/latest.jsx';
import {Provider, connect} from 'react-redux';
import {createStore, combineReducers, bindActionCreators, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import * as reducers from './reducer/';
import * as actions from './action/';

const LatestPage = connect(function mapStateToProps(state){
    return {
        latest: state.latest
    }
}, function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(actions, dispatch)
    };
})(Latest);

const store = createStore(combineReducers({
    ...reducers,
    routing: routerReducer
}), applyMiddleware(thunk));

const history = syncHistoryWithStore(hashHistory, store);

render((
<Provider store={store}>
      <Router history={history}>
          <Route path="/" component={LatestPage}/>
      </Router>
</Provider>
), document.querySelector('#preact-root'));