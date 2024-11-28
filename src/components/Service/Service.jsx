import './service.css';
import ServiceImg from '../../assets/service-1.jpg';
import ServiceImg2 from '../../assets/service-2.jpg';
import ServiceImg3 from '../../assets/service-3.jpg';
import ShapeImg from '../../assets/shape-1.png';
import ShapeImg2 from '../../assets/shape-2.png';

export default function Service() {
    return (
        <section className="section service bg-black-10 text-center">
            <div className="container">
                <p className="section-subtitle label-2">
                    Flavors For Royalty
                </p>

                <h2 className="headline-1 section-title">We Offer Top Notch</h2>

                <p className="section-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sapiente, nobis explicabo commodi fugit corporis voluptatum harum ad numquam laborum molestiae. Minus at veritatis placeat expedita iusto blanditiis qui est?
                </p>

                <ul className="grid-list">
                    <li>
                        <div className="service-card">
                            <a href="#" className="has-before hover:shine">
                                <figure className="card-banner img-holder">
                                    <img src={ServiceImg} alt="Breakfast" className="img-cover" width="285" height="336" loading='lazy' />
                                </figure>
                            </a>

                            <div className="card-content">
                                <h3 className="title-4 card-title">
                                    <a href="#">Breakfast</a>
                                </h3>

                                <a href="#" className="btn-text hover-underline label-2">View Menu</a>
                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="service-card">
                            <a href="#" className="has-before hover:shine">
                                <figure className="card-banner img-holder">
                                    <img src={ServiceImg2} alt="Appetizers" className="img-cover" width="285" height="336" loading='lazy' />
                                </figure>
                            </a>

                            <div className="card-content">
                                <h3 className="title-4 card-title">
                                    <a href="#">Appetizers</a>
                                </h3>

                                <a href="#" className="btn-text hover-underline label-2">View Menu</a>
                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="service-card">
                            <a href="#" className="has-before hover:shine">
                                <figure className="card-banner img-holder">
                                    <img src={ServiceImg3} alt="Drinks" className="img-cover" width="285" height="336" loading='lazy' />
                                </figure>
                            </a>

                            <div className="card-content">
                                <h3 className="title-4 card-title">
                                    <a href="#">Drinks</a>
                                </h3>

                                <a href="#" className="btn-text hover-underline label-2">View Menu</a>
                            </div>

                        </div>
                    </li>
                </ul>

                <img src={ShapeImg} width="246" height="412" alt="shape" loading='lazy' className="shape shape-1 move-anim" />
                <img src={ShapeImg2} width="343" height="345" alt="shape" loading='lazy' className="shape shape-2 move-anim" />

            </div>
        </section>
    )
}
