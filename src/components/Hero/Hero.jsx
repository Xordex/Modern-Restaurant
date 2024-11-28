import './hero.css';
import HeroImg from '../../assets/hero-slider-1.jpg';
import HeroImg2 from '../../assets/hero-slider-2.jpg';
import HeroImg3 from '../../assets/hero-slider-3.jpg';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import HeroIcon from '../../assets/hero-icon.png';
import { useCallback, useEffect, useState } from 'react';
let ssss = null;

export default function Hero() {
    const [slider, setSlider] = useState(1);

    const nextSlide = useCallback(() => {
        setSlider(slider === 3 ? 1 : slider + 1);
    }, [slider])

    useEffect(() => {
        ssss && clearTimeout(ssss);
        ssss = setTimeout(() => nextSlide(), 6000);
    }, [nextSlide])

    function prevSlide() {
        setSlider(slider === 1 ? 3 : slider - 1);
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

            <button className="slider-btn prev" onClick={() => { prevSlide(); }}>
                <FaChevronCircleLeft />
            </button>

            <button className="slider-btn next" onClick={() => { nextSlide(); }}>
                <FaChevronCircleRight />
            </button>

            <a href="#" className="hero-btn has-after">
                <img src={HeroIcon} alt="booking icon" width="48" height="48" />

                <span className="label-2 text-center span">Book a Table</span>
            </a>
        </section>
    )
}
