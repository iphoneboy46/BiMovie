import React from 'react';
import {Route , Router} from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Details from '../pages/Details'

export default function Routes() {
  return (
        <Switch>
            <Route 
                path='/:category/search/:keyword' 
                component={Catalog}
            />
            <Route 
                path='/:category/:id' 
                component={Details}
            />
            <Route 
                path='/:category' 
                component={Catalog}
            />
            <Route 
                path='/' 
                component={Home}
            />
        </Switch>
  )
}
