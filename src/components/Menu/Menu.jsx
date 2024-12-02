import './menu.css';
import ImgMenu1 from '../../assets/menu-1.png';
import ImgMenu2 from '../../assets/menu-2.png';
import ImgMenu3 from '../../assets/menu-3.png';
import ImgMenu4 from '../../assets/menu-4.png';
import ImgMenu5 from '../../assets/menu-5.png';
import ImgMenu6 from '../../assets/menu-6.png';
import ImgShape5 from '../../assets/menu-5.png';
import ImgShape6 from '../../assets/menu-6.png';

export default function Menu() {
    return (
        <section className="section menu" aria-label='menu-label' id='menu'>
            <div className="container">

                <p className="section-subtitle text-center label-2">Special Selection</p>

                <h2 className="headline-1 section-title text-center">Delicious Menu</h2>

                <ul className="grid-list">
                    <li>
                        <div className="menu-card hover:card">
                            <figure className="card-banner img-holder">
                                <img src={ImgMenu1} alt="Greek Salad" width="100" height="100" className='img-cover' loading='lazy' />
                            </figure>

                            <div>
                                <div className="title-wrapper">
                                    <h3 className="title-3">
                                        <a href="#" className="card-title">Greek Salad</a>
                                    </h3>

                                    <span className="badge label-1">Seasonal</span>

                                    <span className="span title-2">$25.50</span>
                                </div>

                                <p className="card-text label-1">
                                    Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.
                                </p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="menu-card hover:card">
                            <figure className="card-banner img-holder" >
                                <img src={ImgMenu2} alt="Lasagne" width="100" height="100" className='img-cover' loading='lazy' />
                            </figure>

                            <div>
                                <div className="title-wrapper">
                                    <h3 className="title-3">
                                        <a href="#" className="card-title">Lasagne</a>
                                    </h3>

                                    <span className="badge label-1">Seasonal</span>

                                    <span className="span title-2">$40.00</span>
                                </div>

                                <p className="card-text label-1">
                                    Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                                </p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="menu-card hover:card">
                            <figure className="card-banner img-holder" >
                                <img src={ImgMenu3} alt="Butternut Pumpkin" width="100" height="100" className='img-cover' loading='lazy' />
                            </figure>

                            <div>
                                <div className="title-wrapper">
                                    <h3 className="title-3">
                                        <a href="#" className="card-title">Butternut Pumpkin</a>
                                    </h3>

                                    <span className="span title-2">$10.00</span>
                                </div>

                                <p className="card-text label-1">
                                    Typesetting industry Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="menu-card hover:card">
                            <figure className="card-banner img-holder" >
                                <img src={ImgMenu4} alt="Tokusen Wagyu" width="100" height="100" className='img-cover' loading='lazy' />
                            </figure>

                            <div>
                                <div className="title-wrapper">
                                    <h3 className="title-3">
                                        <a href="#" className="card-title">Tokusen Wagyu</a>
                                    </h3>

                                    <span className="badge label-1">New</span>

                                    <span className="span title-2">$39.00</span>
                                </div>

                                <p className="card-text label-1">
                                    Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.
                                </p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="menu-card hover:card">
                            <figure className="card-banner img-holder" >
                                <img src={ImgMenu5} alt="Olivas Rellenas" width="100" height="100" className='img-cover' loading='lazy' />
                            </figure>

                            <div>
                                <div className="title-wrapper">
                                    <h3 className="title-3">
                                        <a href="#" className="card-title">Olivas Rellenas</a>
                                    </h3>

                                    <span className="span title-2">$25.00</span>
                                </div>

                                <p className="card-text label-1">
                                    Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.
                                </p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="menu-card hover:card">
                            <figure className="card-banner img-holder" >
                                <img src={ImgMenu6} alt="Opu Fish" width="100" height="100" className='img-cover' loading='lazy' />
                            </figure>

                            <div>
                                <div className="title-wrapper">
                                    <h3 className="title-3">
                                        <a href="#" className="card-title">Opu Fish</a>
                                    </h3>

                                    <span className="span title-2">$49.00</span>
                                </div>

                                <p className="card-text label-1">
                                    Vegetables, cheeses, ground meats, tomato sauce, seasoning and spices
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>

                <p className="menu-text text-center">During winter daily from <span className="span">7:00 pm</span> to <span className="span">9:00 pm</span></p>

                <a href="#" className="btn btn-primary">
                    <span className="text text-1">View All Menu</span>
                    <span className="text text-2" aria-hidden="true">View All Menu</span>
                </a>

                <img src={ImgShape5} width="921" height="1036" loading='lazy' alt="shape" className="shape shape-2 move-anim" />
                <img src={ImgShape6} width="343" height="345" loading='lazy' alt="shape" className="shape shape-3 move-anim" />
            </div>
        </section>
    )
}