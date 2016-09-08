/**
  * Copyright (C) 2016 yanni4night.com
  * latest.jsx
  *
  * changelog
  * 2016-09-07[22:08:48]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
'use strict';
import React, {Component} from 'react';

export default class Latest extends Component {
    componentDidMount() {
        this.props.actions.loadLatest();
    }
    render() {
        console.log(this.props.latest);
        return (<h1>Latest</h1>);
    }
}