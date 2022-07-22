import './App.scss';
import 'swiper/css';
import './assets/boxicons-2.1.2/css/boxicons.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import {publicRoutes}  from './config/Routes'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
         <Header />
          <Routes>
            {publicRoutes.map((route, index) =>{
                const Page = route.component;
                return (
                    <Route key={index} path={route.path} element={<Page />}  />
                )
            })}
          </Routes>
         <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
