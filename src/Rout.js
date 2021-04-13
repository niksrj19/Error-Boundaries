import {BrowserRouter , Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
function Rout(){
    return (
        <>
          <Switch>
              <Route exact path='/home' component={Home} />
              <Route exact path='/about' component={About} />
          </Switch>
        </>
    )
}

export default Rout;
