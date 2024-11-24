import './header.css';
import logo from '../../assets/logo.svg';
import { FaX } from 'react-icons/fa6';

export default function Header() {
    return (
        <header className='header'>
            <div className="container">
                <a href="#" className='logo'>
                    <img src={logo} alt="Grilli - Home" width="160" height="50" />
                </a>

                <nav className="navbar">
                    <button className="close-btn" aria-label='close menu'>
                        <FaX />
                    </button>

                    <a href="#" className='logo'>
                        <img src={logo} alt="Grilli - Home" width="160" height="50" />
                    </a>

                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <a href="#home" className="navbar-link hover-underline active">
                                <div className="separator"></div>

                                <span className="span">Home</span>

                            </a>
                        </li>

                        <li className="navbar-item">
                            <a href="#menus" className="navbar-link hover-underline active">
                                <div className="separator"></div>

                                <span className="span">Menus</span>

                            </a>
                        </li>

                        <li className="navbar-item">
                            <a href="#about" className="navbar-link hover-underline active">
                                <div className="separator"></div>

                                <span className="span">About us</span>

                            </a>
                        </li>

                        <li className="navbar-item">
                            <a href="#chefs" className="navbar-link hover-underline active">
                                <div className="separator"></div>

                                <span className="span">Our Chefs</span>

                            </a>
                        </li>

                        <li className="navbar-item">
                            <a href="#pages" className="navbar-link hover-underline active">
                                <div className="separator"></div>

                                <span className="span">Pages</span>

                            </a>
                        </li>

                        <li className="navbar-item">
                            <a href="#contact" className="navbar-link hover-underline active">
                                <div className="separator"></div>

                                <span className="span">Contact</span>

                            </a>
                        </li>
                    </ul>

                    <div className="text-center">
                        <p className="headline-1 navbar-title">Visit Us</p>

                        <address className='body-4'>
                            Restaurant St, Delicious City, <br />
                            London 9578, UK
                        </address>

                        <p className="body-4 navbar-text">Open: 9.30 am - 2.30 pm</p>

                        <a href="mailto:booking@grilli.com" className='sidebar-link'>booking@grilli.com</a>

                        <div className="separator"></div>

                        <p className="contact-label">
                            Booking Request
                        </p>

                        <a href="tel:+48730728446" className="body-1 contact-number hover-underline">+48 730 728 446</a>
                    </div>

                </nav>

                <a href="#" className="btn btn-secondary">
                    <span className="text text-1">Find A Table</span>
                    <span className="text text-2">Find A Table</span>
                </a>

                <button className="nav-open-btn">
                    <span className="line line-1"></span>
                    <span className="line line-2"></span>
                    <span className="line line-3"></span>
                </button>

                <div className="overlay"></div>

            </div>
        </header>
    )
}
