import './header.css';
import logo from '../../assets/logo.svg';
import { FaX } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import useDetectScroll from '@smakss/react-scroll-direction';

export default function Header() {
    const [navbarActive, setNavbarActive] = useState(false);
    const [headerActive, setheaderActive] = useState(false);
    const [headerHide, setheaderHide] = useState(false);
    const { scrollDir } = useDetectScroll();

    useEffect(() => {
        window.addEventListener("scroll", function () {
            if (this.window.scrollY > 50) {
                setheaderActive(true);
            } else {
                setheaderActive(false);
            }

            if (scrollDir == "up") {
                setheaderHide(false);
            } else {
                setheaderHide(true);
            }
        })
    }, [scrollDir]);

    return (
        <header className={`header ${headerActive && "active"} ${headerHide && "hide"}`} >
            <div className="container">
                <a href="#" className='logo'>
                    <img src={logo} alt="Grilli - Home" width="160" height="50" />
                </a>

                <nav className={`navbar ${navbarActive && "active"}`}>
                    <button className="close-btn" aria-label='close menu' onClick={() => setNavbarActive(false)}>
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
                            <a href="#menus" className="navbar-link hover-underline">
                                <div className="separator"></div>

                                <span className="span">Menus</span>

                            </a>
                        </li>

                        <li className="navbar-item">
                            <a href="#about" className="navbar-link hover-underline">
                                <div className="separator"></div>

                                <span className="span">About us</span>

                            </a>
                        </li>

                        <li className="navbar-item">
                            <a href="#chefs" className="navbar-link hover-underline">
                                <div className="separator"></div>

                                <span className="span">Our Chefs</span>

                            </a>
                        </li>

                        <li className="navbar-item">
                            <a href="#pages" className="navbar-link hover-underline">
                                <div className="separator"></div>

                                <span className="span">Pages</span>

                            </a>
                        </li>

                        <li className="navbar-item">
                            <a href="#contact" className="navbar-link hover-underline">
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

                        <a href="mailto:booking@grilli.com" className='body-4 sidebar-link'>booking@grilli.com</a>

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

                <div className="nav-open-btn" onClick={() => setNavbarActive(true)}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>

                <div className="overlay"></div>

            </div>
        </header>
    )
}
