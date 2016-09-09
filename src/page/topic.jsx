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
    render() {
        const {topic} = this.props;
        const {content_rendered, title} = topic;

        if (!title) {
            this.props.actions.toIndex();
        }
        return (<div class="topic">
            <h1 class="title">{title}</h1>
            <article className="article" dangerouslySetInnerHTML={{__html:content_rendered}}></article>
        </div>);
    }
}