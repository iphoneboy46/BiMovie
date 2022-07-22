import React from 'react';
import logo from '../../assets/bmovie.png';
import styles from './Header.module.css';
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
    return (
        <div>
            header
        </div>
    )
}
