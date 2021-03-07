import React from 'react';
import logo from '../../images/club logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="page-header text-center py-4">
                 {/* passing header logo and title to app.js */}
                <img src={logo} className="mb-4" alt="" />
                <h4>Uro Basketball League Player Archive</h4>
            </div>
        </div>
    );
};

export default Header;