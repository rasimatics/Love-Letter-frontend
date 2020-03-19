import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Play from './components/Play';
import Landing from './components/Landing';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={Landing} exact />
                        <Route path="/play" component={Play} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;