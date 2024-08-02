import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="navbar bg-gradient-to-r from-blue-500 to-purple-600 py-2 px-4 flex justify-between items-center h-16">
        <Link to="/">
            <img src="/logo.png" alt="CloudPano Logo" className="h-10 mr-2" />
        </Link>
        <a
            href="https://app.cloudpano.com/login"
            className="login bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700"
        >
            Login
        </a>
    </div> 
    )
}
export default Navbar