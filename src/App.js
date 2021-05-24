import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import './icons/css/all.min.css';
import './style/style.scss';
import './style/rsuite/custom.less';

import Home from './components/Home';
import Info from './components/assessment/Info';
import Purpose from './components/assessment/Purpose';
import ChatBubble from './components/items/ChatBubble';
import ShoppingCart from './components/items/ShoppingCart';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <section id="App" className="row-start align-items-start bg-white flex-grow-1 h-100">
                <Switch>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/Info" exact component={Info}/>
                    <Route path="/Purpose" exact component={Purpose}/>
                    <Redirect exact from="/" to="/home" />
                </Switch>
                <ChatBubble/>
                <ShoppingCart/>
            </section>
        );
    }
}
