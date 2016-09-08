/**
  * Copyright (C) 2016 yanni4night.com
  * latest.js
  *
  * changelog
  * 2016-09-08[09:09:33]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
'use strict';
import * as ACTION_TYPES from '../constant/action-types';

export const latest = (state = [], action) => {
    if (action.type === ACTION_TYPES.ACTION_LOAD_LATEST) {
        return [...action.payload];
    } else {
        return state;
    }
};