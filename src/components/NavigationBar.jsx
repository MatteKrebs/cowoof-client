import React from 'react';
import { Link } from 'react-router-dom';
import CoWoofLogo from '../assets/images/CoWoofLogo.png'

const NavigationBar = ({isLoggedIn = false}) => {
    return (
        <nav className='relative h-16 bg-white py-2'>
            <div className="absolute left-4 top-3 h-24 w-24 hidden md:block">                
                <Link to={'/'}><img src={CoWoofLogo} alt="cowooflogo"></img></Link>
            </div>

            <ul className="flex text-black justify-evenly items-center h-full">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                { !isLoggedIn ? <li><Link to={'/login'}>Login</Link></li> :  <li><Link to={'/logout'}>Logout</Link></li>}
            </ul>
        </nav>
    )
}

export default NavigationBar;
