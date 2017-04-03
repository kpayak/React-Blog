import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

export default (
    <Route path='/React-blog/' component={App}>
        <IndexRoute component={PostsIndex}/>
        <Route path='/React-blog/posts/new' component={PostsNew}/>
        <Route path='/React-blog/posts/:id' component={PostsShow}/>
    </Route>
);
