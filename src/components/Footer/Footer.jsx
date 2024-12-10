import './footer.css';
import LogoImage from '../../assets/logo.svg';
import { FaEnvelope } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className="footer section has-bg-image text-center">
            <div className="container">
                <div className="footer-top grid-list">
                    <div className="footer-brand">
                        <a href="#" className='logo'>
                            <img src={LogoImage} width="160" height="50" alt="grilli home" loading='lazy' />
                        </a>

                        <address className="body-4">
                            Restaurant St, Delicious City, London 9578, UK
                        </address>

                        <a href="mailto:booking@domain.com" className="body-4 contact-link">booking@domain.com</a>

                        <a href="tel:+8543753478956" className="body-4 contact-link">437 534 789</a>

                        <p className="body-4">Open: 09:00 am - 01:00 pm</p>

                        <div className="wrapper">
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                        </div>

                        <p className="title-1">Get News & Offers</p>

                        <p className="label-1">
                            Subscribe us & Get <span className="span">25% Off.</span>
                        </p>

                        <form action="" className="input-wrapper">
                            <div className="icon-wrapper">
                                <FaEnvelope />

                                <input type="email" name='email_address' placeholder='Your email' autoComplete='off' className="input-field" />
                            </div>

                            <button type="submit" className="btn btn-secondary">
                                <span className="text text-1">Subscribe</span>
                                <span className="text text-2" aria-hidden="true">Subscribe</span>
                            </button>
                        </form>
                    </div>

                    <ul className="footer-list">
                        <li>
                            <a href="#" className="label-2 footer-link hover-underline">Home</a>
                        </li>

                        <li>
                            <a href="#" className="label-2 footer-link hover-underline">Menus</a>
                        </li>

                        <li>
                            <a href="#" className="label-2 footer-link hover-underline">About Us</a>
                        </li>

                        <li>
                            <a href="#" className="label-2 footer-link hover-underline">Our Chefs</a>
                        </li>

                        <li>
                            <a href="#" className="label-2 footer-link hover-underline">Contact</a>
                        </li>
                    </ul>

                    <ul className="footer-list">
                        <li>
                            <a href="#" className="label-2 footer-link hover-underline">Facebook</a>
                        </li>

                        <li>
                            <a href="#" className="label-2 footer-link hover-underline">Instagram</a>
                        </li>

                        <li>
                            <a href="#" className="label-2 footer-link hover-underline">Twitter</a>
                        </li>

                        <li>
                            <a href="#" className="label-2 footer-link hover-underline">Youtube</a>
                        </li>

                        <li>
                            <a href="#" className="label-2 footer-link hover-underline">Google Map</a>
                        </li>
                    </ul>

                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        &copy; 2024 Grilli. All Rights Reserved | Crafted by <a href="https://michaljaroch.pl" target='_blank' className='link'>Michał Jaroch</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
