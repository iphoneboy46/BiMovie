import React ,{useEffect, useRef} from 'react';
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
    
    useEffect(() => {
        const shrinkHeaders = function(){
            if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headersRef.current.classList.add('shrink')
            }else{
                headersRef.current.classList.remove('shrink')
            }
        }
        window.addEventListener('scroll', shrinkHeaders);
        return () =>{
            window.removeEventListener('scroll', shrinkHeaders);
        }
    },[])

    return (
        <div ref={headersRef} className={styles.header}>
            <div className={`${styles.header__wrap} ${styles.container}`}> 
                <div className={styles.logo}>
                    <img src={logo} alt="" />
                    <Link to="/">BiMovies</Link>
                </div>
                <ul className={styles.header__nav}>
                    {
                        headerNav.map((Nav, index) =>{
                           return (
                            <li key={index} className={`${index === active ? 'active' : ''}`}>
                                <Link to={Nav.path}>
                                    {Nav.display}
                                </Link>
                            </li>
                           )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
