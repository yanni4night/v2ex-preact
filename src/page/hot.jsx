/**
  * Copyright (C) 2016 yanni4night.com
  * hot.jsx
  *
  * changelog
  * 2016-09-08[15:16:17]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
'use strict';
import React, {Component} from 'react';
import Topic from '../component/topic.jsx';

export default class Hot extends Component {
    componentDidMount() {
        this.props.actions.loadHot();
    }
    onClick(topic) {
      this.props.actions.toTopic(topic);
    }
    render() {
         return (<div>{this.props.hot.map(topic => {
                    return <Topic {...topic} onClick={this.onClick.bind(this)} key={topic.id}/>;
                })}</div>);
    }
}