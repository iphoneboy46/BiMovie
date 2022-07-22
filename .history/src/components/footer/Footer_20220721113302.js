import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/bmovie.png'

export default function Footer() {
  return (
    <div className="footer" style={{ backgroundImage : `url(${bg})`}}>
        <div className="footer__content container">
            <div className="footer__content__logo">
                <img src={logo} alt="" />
                <Link to='/'>BiMovies</Link>
            </div>
        </div>
    </div>
  )
}
