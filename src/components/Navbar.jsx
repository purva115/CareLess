import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Search, Users, Heart } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-brand">
                <Link to="/"><Shield /> CoverWise</Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/insurance-info"><Shield size={18} /> Insurance Info</Link></li>
                <li><Link to="/search-guide"><Search size={18} /> Search Guide</Link></li>
                <li><Link to="/community"><Users size={18} /> Community</Link></li>
                <li><Link to="/donations"><Heart size={18} /> Donations</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
