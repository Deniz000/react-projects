import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';

function Header() {
    const [isOpen, setOpen] = React.useState(false);
    const [width, setWidth] = React.useState(window.innerWidth);
 
    console.log('Header')
    const displaystyle = {
        display: 'none',
    }
    React.useEffect(() => {
        function handleResize() {
            setWidth(()=>window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleToggle = useCallback(()=>{
        setOpen(() => !isOpen)
    }, [isOpen]) 

    return (
        <header className={`${style.header}`}>
            <Link to='/' className={`${style.siteLogo}`}>Güldeniz Özdemir</Link>

            {width > 800 ? (
                <nav className={`${style.navigation}`}>
                    <Link to='/'>Home</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/weather'>Weather</Link>
                </nav>
            ) : (
                <button onClick={handleToggle} className={`${style.toggleButton}`}>
                    <svg className={`${style.icon}`}  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                        <path fill="#ac9ee1" d="M40,7H8c-1.654,0-3,1.346-3,3v2c0,1.654,1.346,3,3,3h1l31-1c1.654,0,2-0.346,2-2l1-2	C43,8.346,41.654,7,40,7z"></path><path fill="#272343" d="M40,15H9c-0.553,0-1-0.447-1-1s0.447-1,1-1h31c0.552,0,1-0.448,1-1v-2c0-0.553,0.447-1,1-1	s1,0.447,1,1v2C43,13.654,41.654,15,40,15z"></path><path fill="#ac9ee1" d="M40,20H8c-1.654,0-3,1.346-3,3v2c0,1.654,1.346,3,3,3h1l31-1c1.654,0,2-0.346,2-2l1-2	C43,21.346,41.654,20,40,20z"></path><path fill="#272343" d="M40,28H9c-0.553,0-1-0.447-1-1s0.447-1,1-1h31c0.552,0,1-0.448,1-1v-2c0-0.553,0.447-1,1-1	s1,0.447,1,1v2C43,26.654,41.654,28,40,28z"></path><path fill="#ac9ee1" d="M40,33H8c-1.654,0-3,1.346-3,3v2c0,1.654,1.346,3,3,3h1l31-1c1.654,0,2-0.346,2-2l1-2	C43,34.346,41.654,33,40,33z"></path><path fill="#272343" d="M40,41H9c-0.553,0-1-0.447-1-1s0.447-1,1-1h31c0.552,0,1-0.448,1-1v-2c0-0.553,0.447-1,1-1	s1,0.447,1,1v2C43,39.654,41.654,41,40,41z"></path>
                    </svg>
                    <nav
                        className={`${style.toggleNavbar}`}
                        style={isOpen ? null : displaystyle}
                    >
                        <Link to="/">Home</Link>
                        <Link to='/projects'>Projects</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/weather'>Weather</Link>
                    </nav>
                </button>
            )}
        </header>
    );
}
export default React.memo(Header)