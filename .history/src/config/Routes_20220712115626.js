import React from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Details from '../pages/Details'

export default function Routess() {
  return (
        <Routes>
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
        </Routes>
  )
}
