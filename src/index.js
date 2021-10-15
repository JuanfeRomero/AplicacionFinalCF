import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './routes/Home';
import Sign from './routes/Sign';

let App =  () =>{
    return(
      <div>
        <h1>React Facilito, Pasa y firma</h1>
      <BrowserRouter>
        <Switch>
          <Route  path="/sign" component={Sign}/>
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
      </div>
    );
};
/*<BrowserRouter>
    <Route  path="/" component={Home}/>
    <Route  path="/sign" component={Sign}/>
</BrowserRouter>*/

// Render the main component into the dom
ReactDOM.render(<App/>, document.getElementById('app'));
