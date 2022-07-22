import styles from './App.module.scss';
import 'swiper/css';
import './assets/boxicons-2.1.2/css/boxicons.min.css';

import {BrowserRouter, Route} from 'react-router-dom';
import Headers from './components/header/Header'
import Footer from './components/footer/Footer'

import Routes from './config/Routes'

function App() {
  return (
    <div className={styles.app}>
        App
    </div>
  );
}

export default App;
