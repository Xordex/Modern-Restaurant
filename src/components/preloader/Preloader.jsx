import { useState } from 'react';
import './preloader.css';

export default function Preloader() {
    const [preloader, setPreloader] = useState(false);

    window.addEventListener("load", function () {
        setTimeout(function () {
            setPreloader(true);
        }, 1000);
    });

    return (
        <div className={`preloader ${preloader && "loaded"}`}>
            <div className="circle"></div>
            <p className="text">Grilli</p>
        </div>
    )
}
