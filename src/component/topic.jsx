/**
  * Copyright (C) 2016 yanni4night.com
  * topic.jsx
  *
  * changelog
  * 2016-09-08[16:40:52]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
'use strict';
import React, {Component} from 'react';

export default class Topic extends Component {
    render() {
        const {member, title, onClick} = this.props;
        const {username, avatar_large} = member;
        return (<div className="topic-item f-f f-h f-m" onClick={()=>onClick(this.props)}>
            <div className="avatar-wrapper">
                <img className="avatar" src={avatar_large} alt={username}/>
            </div>
            <section className="info f-f f-v f-1">
                <span className="title f-1 f-f f-m"><strong>{title}</strong></span>
                <span className="desc f-1 f-f f-m">{username}</span>
            </section>
        </div>);
    }
}