import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='header'>
            <Link to='/' className='site-logo'>Güldeniz Özdemir</Link>
            <Link to='/projects'>Projects</Link>
        </header>

    )
}