import React ,{useEffect, useRef} from 'react';
import logo from '../../assets/bmovie.png';
import  './Header.scss';
import {Link ,useLocation} from 'react-router-dom'

const headerNav =[
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
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
    console.log(active)
    
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
        <div ref={headersRef} className='header'>
            <div className='header__wrap container'> 
                <div className='logo'>
                    <img src={logo} alt="" />
                    <Link to="/">BiMovies</Link>
                </div>
                <ul className='header__nav'>
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
