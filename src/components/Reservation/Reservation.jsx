import { FaCalendar, FaClock, FaPerson } from 'react-icons/fa6';
import './reservation.css';
import { FaChevronCircleDown } from 'react-icons/fa';

export default function Reservation() {
    return (
        <section className="reservation">
            <div className="container">
                <div className="form reservation-form bg-black-10">
                    <form action="" className="form-left">
                        <h2 className="headline-1 text-center">Online Reservation</h2>

                        <p className="form-text text-center">
                            Booking request <a href="tel:3467893456" className='link'>+48567893446</a>
                            or fill out the order form
                        </p>

                        <div className="input-wrapper">
                            <input type="text" name="name" placeholder='Your Name' autoComplete='off' className='input-field' />
                            <input type="tel" name="phone" placeholder='Phone Number' className='input-field' />
                        </div>

                        <div className="input-wrapper">
                            <div className="icon-wrapper">
                                <FaPerson />

                                <select name="person" id="" className="input-field">
                                    <option value="1 Person">1 Person</option>
                                    <option value="2 Person">2 Person</option>
                                    <option value="3 Person">3 Person</option>
                                    <option value="4 Person">4 Person</option>
                                    <option value="5 Person">5 Person</option>
                                    <option value="6 Person">6 Person</option>
                                    <option value="7 Person">7 Person</option>
                                </select>

                                <FaChevronCircleDown />
                            </div>
                        </div>

                        <div className="input-wrapper">
                            <div className="icon-wrapper">
                                <FaCalendar />

                                <input type="date" name="reservation-date" className="input-field" />

                                <FaChevronCircleDown />
                            </div>
                        </div>

                        <div className="input-wrapper">
                            <div className="icon-wrapper">
                                <FaClock />

                                <select name="person" id="" className="input-field">
                                    <option value="08:00am">08: 00 am</option>
                                    <option value="09:00am">09: 00 am</option>
                                    <option value="10:00am">10: 00 am</option>
                                    <option value="11:00am">11: 00 am</option>
                                    <option value="12:00am">12: 00 am</option>
                                    <option value="01:00pm">01: 00 pm</option>
                                    <option value="02:00pm">02: 00 pm</option>
                                    <option value="03:00pm">03: 00 pm</option>
                                    <option value="04:00pm">04: 00 pm</option>
                                    <option value="05:00pm">05: 00 pm</option>
                                    <option value="06:00pm">06: 00 pm</option>
                                    <option value="07:00pm">07: 00 pm</option>
                                    <option value="08:00pm">08: 00 pm</option>
                                </select>

                                <FaChevronCircleDown />
                            </div>
                        </div>

                        <textarea name="message" className='input-field' placeholder='Message' autoCapitalize='off'></textarea>

                        <button type="submit" className="btn btn-secondary">
                            <span className="text text-1">Book A Table</span>
                            <span className="text text-2" aria-hidden="true">Book A Table</span>
                        </button>
                    </form>

                    <div className="form-right text-center">
                        <h2 className="headline-1 text-center">Contact Us</h2>

                        <p className="contact-label">Booking Request</p>

                        <a href="tel:534897543" className="body-1 contact-number hover-underline">+48345678345</a>

                        <div className="separator"></div>

                        <p className="contact-label">Location</p>

                        <address className="body-4">
                            Restaurant St, Delicious City, <br />
                            London 9578, UK
                        </address>

                        <p className="contact-label">Lunch Time</p>

                        <p className="body-4">
                            Monday to Sunday <br />
                            11.00 am - 2.30 pm
                        </p>

                        <p className="contact-label">Dinner Time</p>

                        <p className="body-4">
                            Monday to Sunday <br />
                            05.00 pm - 10.00 pm
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
