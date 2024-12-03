import './testimonials.css'
import TestiAvatar from '../../assets/testi-avatar.jpg';

export default function Testimonials() {
    return (
        <section className="section testi text-center has-bg-image ">
            <div className="container">
                <div className="quote">``</div>

                <p className="headline-2 testi-text">
                    I wanted to thank you fro inviting me down for that amazing dinner the other night. The food was extraordinary.
                </p>

                <div className="wrapper">
                    <div className="separator"></div>
                    <div className="separator"></div>
                    <div className="separator"></div>
                </div>

                <div className="profile">
                    <img src={TestiAvatar} width="100" height="100" loading='lazy' alt="Sam Jhonson" className="img" />

                    <p className="label-2 profile-name">Sam Jhonson</p>
                </div>
            </div>
        </section>
    )
}
