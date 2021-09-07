import React from 'react';
import Ads from '../ads/Ads';
import CategoryTag from '../tagarchive/CategoryTag';
import Covid from '../../assets/imges/covid.png';
import training from '../../assets/imges/training.png';
const tag = [
    {
        id: 1,
        tagName: 'health'
    },
    {
        id: 2,
        tagName: 'health'
    },
    {
        id: 3,
        tagName: 'health'
    },
    {
        id: 4,
        tagName: 'health'
    },
    {
        id: 5,
        tagName: 'health'
    },
    {
        id: 6,
        tagName: 'health'
    },
    {
        id: 7,
        tagName: 'health'
    },
    {
        id: 8,
        tagName: 'health'
    },
    {
        id: 9,
        tagName: 'health'
    },

]
const SideBar = () => {
    return (
        <div className="ml-12 w-full md:w-1/3">
            <h4 className="py-2 px-6 m-5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold font-bold">
                TAG CLOUD
            </h4>
            <div className="flex flex-wrap items-center gap-2 m-5">

                {
                    tag.map(t => <CategoryTag key={t.id} name={t}>
                    </CategoryTag>)
                }
            </div>
            <h4 className="py-2 px-6 bg-indigo-600 hover:bg-indigo-700 text-white m-5 font-semibold font-bold">
                SPONSOR
            </h4>
            <Ads photo={training}/>
            <Ads photo={Covid}/>
            <div>
            </div>
        </div>
    )
}

export default SideBar
