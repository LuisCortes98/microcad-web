import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import './icons/css/all.min.css';
import './style/style.scss';
import './style/rsuite/custom.less';

import Home from './components/Home';
import Info from './components/assessment/Info';
import Purpose from './components/assessment/Purpose';
import TypeProjects from './components/assessment/TypeProjects';
import ChatBubble from './components/items/ChatBubble';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <section id="App" className="row-start align-items-start bg-white flex-grow-1 h-100">
                <Switch>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/info" exact component={Info}/>
                    <Route path="/purpose" exact component={Purpose}/>
                    <Route path="/typeprojects" exact component={TypeProjects}/>
                    <Redirect exact from="/" to="/home" />
                </Switch>
                <ChatBubble/>
            </section>
        );
    }
}
