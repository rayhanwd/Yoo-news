import React from 'react';

const Ads = (props) => {
    return (
        <div className="overflow-hidden shadow-lg cursor-pointer m-5">
            <a href="#" className="w-full block h-full">
                <img alt="covid 19" src={props.photo} className="w-full object-cover" />
            </a>
        </div>
    )
}

export default Ads;
