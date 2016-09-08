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
import Topic from '../component/topic.jsx';

export default class Latest extends Component {
    componentDidMount() {
        this.props.actions.loadLatest();
    }
    render() {
        return (<div>{this.props.latest.map(topic => {
                    return <Topic {...topic} key={topic.id}/>;
                })}</div>);
    }
}