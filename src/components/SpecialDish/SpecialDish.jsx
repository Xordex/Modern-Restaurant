import './specialdish.css';
import specialdish from '../../assets/special-dish-banner.jpg';

export default function SpecialDish() {
    return (
        <section className="special-dish text-center">
            <div className="special-dish-banner">
                <img src={specialdish} alt="special dish" width="940" height="900" loading='lazy' className='img-cover' />
            </div>

            <div className="special-dish-content bg-black-10">
                <div className="container">
                    <img src={ } width="28" height="41" loading='lazy' alt="" />
                </div>
            </div>
        </section>
    )
}