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
    const headersRef = useRef(null)

    return (
        <div>
            header
        </div>
    )
}
