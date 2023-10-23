import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';

export default function Header() {
    const [isOpen, setOpen] = React.useState(false);
    const [width, setWidth] = React.useState('');

    const displaystyle = {
        display: 'none',
    }
    React.useEffect(() => {
        function handleResize() {
          setWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    console.log(width);

    function toggleNavbar() {
        setOpen(() => !isOpen)
        console.log(isOpen)
    }

    return (
        <header className={`${style.header}`}>
            <Link to='/' className={`${style.siteLogo}`}>Güldeniz Özdemir</Link>

            {width < 900 ? (
                <button onClick={toggleNavbar}>Toggle
                    <nav
                    className={`${style.toggleButton}`}
                        style={isOpen ? null : displaystyle}
                        >
                        <Link to="/">Home</Link>
                        <Link to='/projects'>Projects</Link>
                        <Link to='/about'>About</Link>
                    </nav>
                </button>
            ) : (
                <nav className={`${style.navigation}`}>
                    <Link to='/'>Home</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/about'>About</Link>
                </nav>
            )}
        </header>
    );
}
