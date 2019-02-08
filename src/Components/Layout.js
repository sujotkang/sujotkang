import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './Home.js';
import Portfolio from './Portfolio.js';
import Contact from './Contact.js';

const Layout = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
        </Switch>
    )
}

export default Layout;