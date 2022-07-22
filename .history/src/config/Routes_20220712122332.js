
import Home from '../pages/Home/Home';
import Catalog from '../pages/Catalogs/Catalog';
import Details from '../pages/Details/Details'


const publicRoutes = [
    { path: '/:category/search/:keyword', component: Catalog},
    { path: '/:category/:id', component: Details},
    { path: '/:category', component: Catalog},
    { path: '/' ,component: Home},
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}


