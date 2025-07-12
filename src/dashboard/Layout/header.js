import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { RiMenuFold4Fill } from "react-icons/ri";
import { AiOutlineMenuUnfold } from "react-icons/ai";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <header className="header">
            <div className="logo d-flex align-items-center gap-3">
                <img src="image/logo1.png" alt="Logo" className="img-fluid" />
            </div>

            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                <HiMenu size={28} />
            </div>

            <nav className={`nav-links ${menuOpen ? 'show' : ''}`}>
                <div className='MobileIcon d-md-none' onClick={() => setMenuOpen(!menuOpen)}><RiMenuFold4Fill className='text-black' /> </div>
                <Link to="/service" onClick={() => setMenuOpen(false)}>service</Link>
                <Link to="/About" onClick={() => setMenuOpen(false)}>About</Link>
                <Link to="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </nav>
        </header>
    );
};

export default Header;
