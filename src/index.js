require('./styles/App.css');

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const logo = require('./images/logo_firma.png');
import Home from './routes/Home';
import Sign from './routes/Sign';

let App =  () =>{
    return(
      <div className="main">
        <img src={logo} alt="logo firma" className='mx-auto d-block' width="150px" />
        <h1 className="text-center">React Facilito, Pasa y firma</h1>
      <BrowserRouter>
        <Switch>
          <Route  path="/sign" component={Sign}/>
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
      </div>
    );
};
/*BrowserRoute si o si necesita un Switch*/

// Render the main component into the dom
ReactDOM.render(<App/>, document.getElementById('app'));
