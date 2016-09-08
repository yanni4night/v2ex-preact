/**
  * Copyright (C) 2016 yanni4night.com
  * topic.js
  *
  * changelog
  * 2016-09-08[22:58:32]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
'use strict';
import * as ACTION_TYPES from '../constant/action-types';

export const topic = (state = {}, action) => {
    if (action.type === ACTION_TYPES.ACTION_TO_TOPIC) {
        return action.payload;
    } else {
        return state;
    }
};