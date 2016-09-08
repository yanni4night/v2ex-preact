/**
 * Copyright (C) 2016 yanni4night.com
 * index.js
 *
 * changelog
 * 2016-09-08[09:07:10]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
import * as ACTION_TYPES from '../constant/action-types';
//import es6Promise from 'es6-promise';
//import 'isomorphic-fetch';
//es6Promise.polyfill();
//import Promise from 'bluebird';
//import fetchPonyfill from 'fetch-ponyfill';

//const {fetch, Request, Response, Headers} = fetchPonyfill(Promise);

export const loadHot = () => {
    return (dispatch, getState) => {
        const state = getState();
        if (state.hot && state.hot.length) {
            return;
        } else {
            fetch('/api/topics/hot.json', {
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json()).then(hot => {
                dispatch({
                    type: ACTION_TYPES.ACTION_LOAD_HOT,
                    payload: hot
                });
            });
        }
    };
};

export const loadLatest = () => {
    return (dispatch, getState) => {
        const state = getState();
        if (state.latest && state.latest.length) {
            return;
        } else {
            fetch('/api/topics/latest.json', {
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json()).then(latest => {
                dispatch({
                    type: ACTION_TYPES.ACTION_LOAD_LATEST,
                    payload: latest
                });
            });
        }
    };
};