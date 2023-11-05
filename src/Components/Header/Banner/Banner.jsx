import { useState, useEffect, useCallback } from 'react';
import './Banner.css';
import images from './images';




const Banner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [isFadingIn, setIsFadingIn] = useState(false);

    const getNextIndex = useCallback(
        (currentIndex) => (currentIndex + 1) % images.length,
        []
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsFadingOut(true);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => getNextIndex(prevIndex));
                setIsFadingOut(false);
                setIsFadingIn(true);
            }, 500);
        }, 7000);

        return () => clearInterval(intervalId);
    }, [getNextIndex]);

    useEffect(() => {
        if (isFadingIn) {
            const fadeTimeout = setTimeout(() => {
                setIsFadingIn(false);
            }, 1000);

            return () => clearTimeout(fadeTimeout);
        }
    }, [isFadingIn]);

    const scrollOffset = 300;

    const handleExploreClick = () => {
        const windowHeight = window.innerHeight;
        const targetPosition = windowHeight / 2 + scrollOffset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    };

    return (
        <div className="overflow-hidden flex justify-center items-center">
            <div className="carousel w-full object-cover">
                {images.map((image, index) => (
                    <div key={index} className={`carousel-item relative w-full flex justify-center items-center flex-1 overflow-hidden ${index === currentImageIndex ? 'visible' : 'hidden'}`}>
                        <div className={`image-wrapper ${isFadingOut && index === currentImageIndex ? 'fade-out' : ''} ${isFadingIn && index === currentImageIndex ? 'fade-in' : ''}`}>
                            <img
                                src={image}
                                className={`w-full object-cover md:h-full md:w-full h-96 opacity-70 dark:opacity-40 duration-300 ${index === currentImageIndex ? 'zoom-in' : ''}`}
                                alt={`Image ${index}`}
                            />
                        </div>
                        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <div className="flex flex-col items-center justify-center h-[88vh]">
                                <h2 className="xl:text-6xl md:text-4xl text-3xl font-primary font-bold text-white text-center md:leading-[1.2] drop-shadow-lg shadow-black mb-12">
                                    Discover Your Dream <span className='text-[#91C96F]'>Career</span> with BD Jobs <br />
                                </h2>
                                <div>
                                    <button
                                        className="bg-[#91C96F] font-primary font-semibold md:text-xl text-white md:px-12 px-7 md:py-4 py-2 btn-shape rounded"
                                        onClick={handleExploreClick}
                                    >
                                        Lets Go!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Banner;
