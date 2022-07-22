import React from 'react';
import logo from '../../assets/bmovie.png';
import styles from '../header/Header.module.css';

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
