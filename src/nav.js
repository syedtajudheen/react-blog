import React from 'react';
import './home.css';
import {  Link } from 'react-router-dom';
import Post from './post.js';

class Nav extends React.Component{
    render(){
        return (<div>
            <Link to={'/Home'}><h1 className="heading">BLOG POSTS</h1></Link>
            <Link to={'/Post'}><h3 className="click">POST YOUR BLOG</h3></Link>
                </div>);
    }
}
export default Nav;