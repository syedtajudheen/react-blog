import React from 'react';
import './home.css';
import Nav from './nav.js';
import Home from './home.js';
import Post from './post.js';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

class App extends React.Component{
    render(){
        return (<BrowserRouter>
                    <div>
                        <Nav />
                        <Switch>
                            <Route path='/Home' component={Home}></Route>
                            <Route path='/Post' component={Post}></Route>
                        </Switch>

                    </div>
               </BrowserRouter>
        );
    }
}

export default App;