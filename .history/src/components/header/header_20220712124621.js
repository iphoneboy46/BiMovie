import React ,{useRef} from 'react';
import logo from '../../assets/bmovie.png';
import styles from './Header.module.scss';
import {Link ,useLocation} from 'react-router-dom'

const headerNav =[
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movies'
    },
    {
        display: 'Tv Series',
        path: '/tv'
    }
]

export default function Header() {

    const { pathname } = useLocation();
    const headersRef = useRef(null);

    const active = headerNav.findIndex(e => e.pathname === pathname);

    return (
        <div ref={headersRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to="/">BiMovies</Link>
                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((Nav, index) =>{
                            <li key={index} className={`${index === active ? 'active' : ''}`}>
                                <Link to={Nav.path}>
                                    {Nav.display}
                                </Link>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
