import './features.css';
import FeatureIcon1 from '../../assets/features-icon-1.png';
import FeatureIcon2 from '../../assets/features-icon-2.png';
import FeatureIcon3 from '../../assets/features-icon-3.png';
import FeatureIcon4 from '../../assets/features-icon-4.png';
import ShapeImg1 from '../../assets/shape-7.png';
import ShapeImg8 from '../../assets/shape-8.png';

export default function Features() {
    return (
        <section className="section features text-center" aria-label='features'>
            <div className="container">
                <p className="section-subtitle label-2">Why Coose Us</p>

                <h2 className="headline-1 section-title">Our Strength</h2>

                <ul className="grid-list">
                    <li className="feature-item">
                        <div className="feature-card">

                            <div className="card-icon">
                                <img src={FeatureIcon1} alt="icon" width="100" height="80" loading='lazy' />
                            </div>

                            <h3 className="title-2 card-title">Hygienic Food</h3>

                            <p className="label-1 card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente aut ducimus.</p>

                        </div>
                    </li>

                    <li className="feature-item">
                        <div className="feature-card">

                            <div className="card-icon">
                                <img src={FeatureIcon2} alt="icon" width="100" height="80" loading='lazy' />
                            </div>

                            <h3 className="title-2 card-title">Fresh Environment</h3>

                            <p className="label-1 card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente aut ducimus.</p>

                        </div>
                    </li>

                    <li className="feature-item">
                        <div className="feature-card">

                            <div className="card-icon">
                                <img src={FeatureIcon3} alt="icon" width="100" height="80" loading='lazy' />
                            </div>

                            <h3 className="title-2 card-title">Skilled Chefs</h3>

                            <p className="label-1 card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente aut ducimus.</p>

                        </div>
                    </li>

                    <li className="feature-item">
                        <div className="feature-card">

                            <div className="card-icon">
                                <img src={FeatureIcon4} alt="icon" width="100" height="80" loading='lazy' />
                            </div>

                            <h3 className="title-2 card-title">Event & Party</h3>

                            <p className="label-1 card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente aut ducimus.</p>

                        </div>
                    </li>
                </ul>

                <img src={ShapeImg1} alt="shape" width="208" height="178" loading='lazy' className="shape shape-1" />

                <img src={ShapeImg8} alt="shape" width="120" height="115" loading='lazy' className="shape shape-2" />

            </div>
        </section>
    )
}
