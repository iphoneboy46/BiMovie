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
        <div className="footer__content__menus">
            <div className="footer__content__menu">
                <Link to='/'>Home</Link>
                <Link to='/'>Contact Us</Link>
                <Link to='/'>Term of service</Link>
                <Link to='/'>About us</Link>
            </div>
            <div className="footer__content__menu">
                <Link to='/'>Live</Link>
                <Link to='/'>FAQ</Link>
                <Link to='/'>Term of service</Link>
                <Link to='/'>About us</Link>
            </div>
            <div className="footer__content__menu">
                <Link to='/'>Home</Link>
                <Link to='/'>Contact Us</Link>
                <Link to='/'>Term of service</Link>
                <Link to='/'>About us</Link>
            </div>
        </div>
    </div>
  )
}
