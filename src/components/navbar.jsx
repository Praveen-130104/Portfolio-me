import React, { useState } from 'react';
import 'animate.css';
import { Link } from 'react-router-dom';

function Navbar() {

    const [icon, setIcon] = useState(true);
    const toggleMenu = () => {
        setIcon(!icon);
    }

    return (
        <nav className="navb animate__animated animate__fadeIn" >
            {!icon &&
                <div className={`l bg animate__animated animate__bounceInLeft  w-100`}
                    style={{ height: '100vh',width:'100%',zIndex:'0' }}
                >
                    <div className="list">
                        <ul className="menu-list  ">
                            <li className="menu-item">
                                <Link to="/" className="menu-link rokkit jump-text">Home</Link>
                                <hr />
                            </li>
                            <li className="menu-item">
                                <Link to="/about" className="menu-link rokkit">About</Link>
                                <hr />
                            </li>
                            
                            <li className="menu-item">
                                <Link to="/project" className="menu-link rokkit">Projects</Link>
                                <hr />
                            </li> 
                            <li className="menu-item">
                                <Link to="/contact" className="menu-link rokkit">Contact</Link>
                                <hr />
                            </li>
                        </ul>
                    </div>
                </div>}
            <button className="m-3 botn" onClick={toggleMenu}>
                <i className={`fa ${icon ? 'fa-bars menu' : 'fa-times closed'}`}
                    style={{
                        fontSize: "1.5rem",
                        position: "absolute",
                        transform: icon ? 'rotate(0deg)' : 'rotate(90deg)',
                        transition: 'transform 0.3s ease-in-out',
                        zindex:'0'
                    }}
                    id='menu-btn'
                ></i>
            </button>
        </nav>
    );
}
export default Navbar;
