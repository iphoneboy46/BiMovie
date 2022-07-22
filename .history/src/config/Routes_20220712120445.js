import React from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Details from '../pages/Details'


const publicRoutes = [
    { path: '/:category/search/:keyword', component: Catalog},
    { path: '/:category/:id', component: Details},
    { path: '/:category', component: Catalog},
    {path: '/' ,component: Home},
]

const privateRoutes = [

]


export default function Routess() {
  return (

        <BrowserRouter>
            <Routes>
                <Route 
                   
                />
                <Route 
                   
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
        </BrowserRouter>
  )
}
