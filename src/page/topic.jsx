/**
  * Copyright (C) 2016 yanni4night.com
  * topic.jsx
  *
  * changelog
  * 2016-09-08[23:04:50]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
'use strict';
import React, {Component} from 'react';

export default class Topic extends Component {
    componentDidMount() {
        //this.props.actions.loadLatest();
    }
    render() {

        const {topic} = this.props;
        const {content_rendered, title} = topic;
        if (!content_rendered) {
            this.props.actions.toIndex();
        }
        return (<article className="topic">{content_rendered}</article>);
    }
}