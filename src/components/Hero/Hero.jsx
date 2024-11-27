import './hero.css';
import HeroImg from '../../assets/hero-slider-1.jpg';
import HeroImg2 from '../../assets/hero-slider-2.jpg';
import HeroImg3 from '../../assets/hero-slider-3.jpg';
import { FaChevronCircleDown } from 'react-icons/fa';
import HeroIcon from '../../assets/hero-icon.png';
import { useState } from 'react';

export default function Hero() {
    const [slider, setSlider] = useState(1);

    const nextslidetimeout = setTimeout(nextSlide, 6000);

    function nextSlide() {
        slider === 1 && setSlider(2);
        slider === 2 && setSlider(3);
        slider === 3 && setSlider(1);
    };

    function prevSlide() {
        slider === 1 && setSlider(3);
        slider === 2 && setSlider(1);
        slider === 3 && setSlider(2);
    };

    return (
        <section className="hero text-center" id='home'>
            <ul className="hero-slider">
                <li className={`slider-item ${slider === 1 && "active"}`}>
                    <div className="slider-bg">
                        <img src={HeroImg} alt="" className='img-cover' width="1880" height="950" />
                    </div>

                    <p className="label-2 section-subtitle slider-reveal">Traditional & Hygine</p>

                    <h1 className="display-1 hero-title slider-reveal">
                        For the love of <br />
                        delicious food
                    </h1>

                    <p className="body-2 hero-text slider-reveal">
                        Come with family & feel the joy of mouthwatering food
                    </p>

                    <a href="#" className="btn btn-secondary slider-reveal">
                        <span className="text text-1">View Our Menu</span>

                        <span className="text text-2">View Our Menu</span>
                    </a>
                </li>

                <li className={`slider-item ${slider === 2 && "active"}`}>
                    <div className="slider-bg">
                        <img src={HeroImg2} alt="" className='img-cover' width="1880" height="950" />
                    </div>

                    <p className="label-2 section-subtitle slider-reveal">Delightful experience</p>

                    <h1 className="display-1 hero-title slider-reveal">
                        Flavours Inspired by <br />
                        the Seasons
                    </h1>

                    <p className="body-2 hero-text slider-reveal">
                        Come with family & feel the joy of mouthwatering food
                    </p>

                    <a href="#" className="btn btn-primary slider-reveal">
                        <span className="text text-1">View Our Menu</span>

                        <span className="text text-2">View Our Menu</span>
                    </a>
                </li>

                <li className={`slider-item ${slider === 3 && "active"}`}>
                    <div className="slider-bg">
                        <img src={HeroImg3} alt="" className='img-cover' width="1880" height="950" />
                    </div>

                    <p className="label-2 section-subtitle slider-reveal">amazing & delicious</p>

                    <h1 className="display-1 hero-title slider-reveal">
                        Where every flavor <br />
                        tells a story
                    </h1>

                    <p className="body-2 hero-text slider-reveal">
                        Come with family & feel the joy of mouthwatering food
                    </p>

                    <a href="#" className="btn btn-primary slider-reveal">
                        <span className="text text-1">View Our Menu</span>

                        <span className="text text-2">View Our Menu</span>
                    </a>
                </li>
            </ul>

            <button className="slider-btn prev" onClick={() => { prevSlide(); clearTimeout(nextslidetimeout); }}>
                <FaChevronCircleDown />
            </button>

            <button className="slider-btn next" onClick={() => { nextSlide(); clearTimeout(nextslidetimeout); }}>
                <FaChevronCircleDown />
            </button>

            <a href="#" className="hero-btn has-after">
                <img src={HeroIcon} alt="booking icon" width="48" height="48" />

                <span className="label-2 text-center span">Book a Table</span>
            </a>
        </section>
    )
}
