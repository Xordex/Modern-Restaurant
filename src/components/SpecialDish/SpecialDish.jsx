import './specialdish.css';
import specialdish from '../../assets/special-dish-banner.jpg';
import badgeImg from '../../assets/badge-1.png';
import Shape4 from '../../assets/shape-4.png';
import Shape9 from '../../assets/shape-9.png';

export default function SpecialDish() {
    return (
        <section className="special-dish text-center">
            <div className="special-dish-banner">
                <img src={specialdish} alt="special dish" width="940" height="900" loading='lazy' className='img-cover' />
            </div>

            <div className="special-dish-content bg-black-10">
                <div className="container">
                    <img src={badgeImg} width="28" height="41" loading='lazy' alt="badge" className='abs-img' />

                    <p className="section-subtitle label-2">Special Dish</p>

                    <h2 className="headline-1 section-title">Lobster Tortellini</h2>

                    <p className="section-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, placeat voluptatum! Dolore vel impedit provident voluptas, similique nam alias sequi beatae rem vitae. Iusto, cumque praesentium eveniet dolores quo repellendus.
                    </p>

                    <div className="wrapper">
                        <del className="del body-3">$40.00</del>
                        <span className="span body-1">$20.00</span>
                    </div>

                    <a href="#" className="btn btn-primary">
                        <span className="text text-1">View All Menu</span>

                        <span className="text text-2" aria-hidden="true">View All Menu</span>
                    </a>
                </div>
            </div>

            <img src={Shape4} width="179" height="359" alt="" className="shape shape-1" loading='lazy' />

            <img src={Shape9} width="351" height="462" alt="" className="shape shape-2" loading='lazy' />

        </section>
    )
}