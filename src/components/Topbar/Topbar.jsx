import './topbar.css'
import { FaRegClock, FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="container">
                <address className="topbar-item">
                    <div className="icon">
                        <FaLocationDot />
                    </div>

                    <span className="span">
                        Restaurant Stm Delicious City, London 9578, UK
                    </span>
                </address>

                <div className="separator"></div>

                <div className="topbar-item item-2">
                    <div className="icon">
                        <FaRegClock />
                    </div>

                    <span className="span">Daily: 8.00 am to 10.00 pm</span>
                </div>

                <a href="tel:730728446" className='topbar-item link'>
                    <div className="icon">
                        <FaPhone />
                    </div>

                    <span className="span">+48 730 728 446</span>
                </a>

                <div className="separator"></div>

                <a href="mailto:kontakt@michaljaroch.pl" className='topbar-item link'>
                    <div className="icon">
                        <FaEnvelope />
                    </div>

                    <span className="span">kontakt@michaljaroch.pl</span>
                </a>
            </div>
        </div>
    )
}
