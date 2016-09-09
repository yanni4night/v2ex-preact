/**
  * Copyright (C) 2016 yanni4night.com
  * index.js
  *
  * changelog
  * 2016-09-07[20:58:09]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
'use strict';
import {Router, Route, IndexRoute} from 'react-router';
import React from 'react';
import {render} from 'react-dom';
import Latest from './page/latest.jsx';
import Hot from './page/hot.jsx';
import Topic from './page/topic.jsx';
import Container from './page/container.jsx';
import {Provider, connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './action/';
import {store, history} from './config/';

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

// Pages for routers
const ContainerPage = connect((state, ownProps) => ({current: ownProps.location.pathname}), mapDispatchToProps)(Container);
const LatestPage = connect(state => ({latest: state.latest}), mapDispatchToProps)(Latest);
const HotPage = connect(state => ({hot: state.hot}), mapDispatchToProps)(Hot);
const TopicPage = connect(state => ({topic: state.topic}), mapDispatchToProps)(Topic);

render((
<Provider store={store}>
      <Router history={history}>
          <Route path="/" component={ContainerPage}>
            <IndexRoute component={LatestPage}/>
            <Route path="latest" component={LatestPage}/>
            <Route path="hot" component={HotPage}/>
            <Route path="/topic/:topic_id" component={TopicPage}></Route>
          </Route>
      </Router>
</Provider>
), document.querySelector('#preact-root'));