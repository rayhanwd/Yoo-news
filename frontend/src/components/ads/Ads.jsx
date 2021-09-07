import React from 'react';
import covid from '../../assets/imges/covid.png';
const Ads = () => {
    return (
        <div className="overflow-hidden shadow-lg cursor-pointer m-5">
            <a href="#" className="w-full block h-full">
                <img alt="covid 19" src={covid} className="w-full object-cover" />
            </a>
        </div>
    )
}

export default Ads;
