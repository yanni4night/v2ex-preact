/**
  * Copyright (C) 2016 yanni4night.com
  * index.js
  *
  * changelog
  * 2016-09-09[14:12:00]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
'use strict';
import {hashHistory} from 'react-router';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import * as reducers from '../reducer/';
import {syncHistoryWithStore, routerReducer, routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';

// Redux store
export const store = createStore(combineReducers({
    ...reducers,
    routing: routerReducer
}), applyMiddleware(thunk, routerMiddleware(hashHistory)));

export const history = syncHistoryWithStore(hashHistory, store);
