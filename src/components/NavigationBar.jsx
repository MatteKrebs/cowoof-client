import React from 'react';
import { Link } from 'react-router-dom';
import CoWoofLogo from '../assets/images/CoWoofLogo.png'


const NavigationBar = () => {
    return (
        <nav>
            <div className="absolute left-0 top-0 h-20 w-20">
                <Link to={'/'}><img src={CoWoofLogo} alt="cowooflogo"></img></Link>
            </div>
                
            <ul className="flex justify-around">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>                
                <li><Link to={'/login'}>Login</Link></li>               
            </ul>
        </nav>
    )
}

export default NavigationBar;