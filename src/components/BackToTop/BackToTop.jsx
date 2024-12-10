import { FaChevronUp } from 'react-icons/fa';
import './backtotop.css';
import { useEffect, useState } from 'react';
import useDetectScroll from '@smakss/react-scroll-direction';

export default function BackToTop() {
    const [activeArrow, setActiveArrow] = useState(false);
    const { scrollDir, scrollPosition } = useDetectScroll();

    useEffect(() => {
        if (scrollPosition.top > 700 && scrollDir == "up") {
            setActiveArrow(true);
        } else {
            setActiveArrow(false);
        }
    }, [scrollDir, scrollPosition.top, scrollPosition.up]);


    return (
        <a href="#top" className={`back-top-btn ${activeArrow && "active"}`} aria-label='back to top' data-back-top-btn>
            <FaChevronUp />
        </a>
    )
}
