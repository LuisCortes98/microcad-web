import React, { Component } from 'react';
import Home from './components/Home';

import './icons/css/all.min.css';
import './style/style.scss';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <section className="row-start align-items-start vh-100 w-100 bg-white flex-grow-1 h-100">
                <Home/>
            </section>
        );
    }
}
