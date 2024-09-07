import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css'; // Подключите стили для вашего хедера
import logo from '../img/logo.svg';

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleClickOutside = (event) => {
        if (sidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setSidebarOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [sidebarOpen]);

    return (
        <>
            <header className="header">
                <nav className="navbar">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                        <div className='logo-title'>
                            <span>ЭЛЕКТРОННАЯ СИСТЕМА</span>
                            <span>ЛОКОМОТИВНЫЙ ДЕПО АНДИЖАН</span>
                        </div>
                    </div>
                    <div className="menu">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="menu-icon" onClick={toggleSidebar}>
                        {sidebarOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </nav>
            </header>
            <aside ref={sidebarRef} className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <nav>
                    <a href="#home" onClick={toggleSidebar}>Home</a>
                    <a href="#about" onClick={toggleSidebar}>About</a>
                    <a href="#contact" onClick={toggleSidebar}>Contact</a>
                </nav>
            </aside>
        </>
    );
};

export default Header;
