/**
 * Copyright (C) 2016 yanni4night.com
 * hot.js
 *
 * changelog
 * 2016-09-08[08:58:57]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';

import * as ACTION_TYPES from '../constant/action-types';

export const hot = (state = [], action) => {
    if (action.type === ACTION_TYPES.ACTION_LOAD_HOT) {
        return [...action.payload];
    } else {
        return state;
    }
};