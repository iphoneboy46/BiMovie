import styles from './App.module.scss';
import 'swiper/css';
import './assets/boxicons-2.1.2/css/boxicons.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import {publicRoutes}  from './config/Routes'

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
         <Header />
         <Routess />
         <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
