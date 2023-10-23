import React from 'react'
import { Link } from 'react-router-dom'
import style from './Header.module.css'
export default function Header() {

    return (
        <header className={`${style.header}`}>
            <Link to='/' className={`${style.siteLogo}`}>Güldeniz Özdemir</Link>
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/about'>About</Link>
        </header>

    )
}