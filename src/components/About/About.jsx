import './about.css';
import AboutBanner from '../../assets/about-banner.jpg';
import AboutAbsImage from '../../assets/about-abs-image.jpg';
import BadgeImg from '../../assets/badge-2.png';
import ShapeImg from '../../assets/shape-3.png';

export default function About() {
    return (
        <section className="section about text-center" id='about'>
            <div className="container">
                <div className="about-content">

                    <p className="label-2 section-subtitle" id='about-label'>Our Story</p>

                    <h2 className="headline-1 section-title">Every Fla vor Tells a Story</h2>

                    <p className="section-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio corrupti adipisci quis voluptatem qui enim aliquam sit sapiente, reprehenderit, perspiciatis, nam debitis eveniet iure voluptates aliquid recusandae provident architecto.
                    </p>

                    <div className="contact-label">Book Through Call</div>

                    <a href="tel:73027523" className="body-1 contact-number hover-underline">+48 730 275 223</a>

                    <a href="#" className="btn btn-primary">
                        <span className="text text-1">Read More</span>
                        <span className="text text-2" aria-hidden="true">Read More</span>
                    </a>

                </div>

                <figure className="about-banner">
                    <img src={AboutBanner} className='w-100 aboutBanner' data-parallax-speed="1" alt="about banner" width="570" height="570" loading='lazy' />
                    <div className="abs-img abs-img-1 has-before" data-parallax-item data-parallax-speed="1.75">
                        <img src={AboutAbsImage} width="285" height="285" loading='lazy' alt="" className='w-100 AboutAbsImage' />
                    </div>

                    <div className="abs-img abs-img-2">
                        <img src={BadgeImg} width="133" height="134" loading='lazy' alt="since 1950" />
                    </div>

                    <img src={ShapeImg} alt="" width="197" height="194" loading='lazy' className='shape' />
                </figure>
            </div>
        </section>
    )
}