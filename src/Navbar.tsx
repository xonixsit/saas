import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">
                <Link to="/" className="flex items-center space-x-2">
                    <span className="font-bold text-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        SaaSFlow
                    </span>
                </Link>
                <div className="md:hidden flex items-center">
                    <button className="text-gray-700 hover:text-blue-500" id="mobile-menu-toggle">
                        <FontAwesomeIcon icon={faBars} className="text-2xl" />
                    </button>
                </div>
                <div className="hidden md:flex space-x-6">
                    <Link to="features" className="text-gray-700 hover:text-blue-500">Features</Link>
                    <Link to="pricing" className="text-gray-700 hover:text-blue-500">Pricing</Link>
                    <Link to="testimonials" className="text-gray-700 hover:text-blue-500">Testimonials</Link>
                    <Link to="faq" className="text-gray-700 hover:text-blue-500">FAQ</Link>
                    <Link to="support" className="text-gray-700 hover:text-blue-500">Support</Link>
                    <Link to="signup" className="text-gray-700 hover:text-blue-500">Sign Up</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;