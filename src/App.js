import React, { Component } from 'react';

import './icons/css/all.min.css';
import './style/style.scss';
import './style/rsuite/custom.less';

import Home from './components/Home';
import Info from './components/assessment/Info';
import Purpose from './components/assessment/Purpose';
import ChatBubble from './components/items/ChatBubble';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <section className="row-start align-items-start vh-100 w-100 bg-white flex-grow-1 h-100">
                <Purpose/>
                <ChatBubble/>
            </section>
        );
    }
}
