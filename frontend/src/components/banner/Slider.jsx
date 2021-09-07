import React from 'react';

const Slider = () => {

    return (
        <div className="swiper mySwiper">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <a href="#" className="w-full block h-80">
                        <img alt="covid 19" src="https://daily-news.gbjsolution.com/content/images/2015/09/warrior-pose.jpg" className="w-full object-cover" />
                    </a>
                </div>
                <div className="swiper-slide">
                    <a href="#" className="w-full block h-80">
                        <img alt="covid 19" src="https://daily-news.gbjsolution.com/content/images/2015/09/oia-416136_1920.jpg" className="w-full object-cover" />
                    </a>
                </div>
                <div className="swiper-slide">
                    <a href="#" className="w-full block h-80">
                        <img alt="covid 19" src="https://daily-news.gbjsolution.com/content/images/2015/09/ship.jpg" className="w-full object-cover" />
                    </a>
                </div>

            </div>
        </div>

    );
};

export default Slider