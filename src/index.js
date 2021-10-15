import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './routes/Home';
import Sign from './routes/Sign';

let App =  () =>{
    return(
        <BrowserRouter>
            <Route  path="/" component={Home}/>
            <Route  path="/sign" component={Sign}/>
        </BrowserRouter>
    );
};
/*<BrowserRouter>
    <Route  path="/" component={Home}/>
    <Route  path="/sign" component={Sign}/>
</BrowserRouter>*/

// Render the main component into the dom
ReactDOM.render(App, document.getElementById('app'));
