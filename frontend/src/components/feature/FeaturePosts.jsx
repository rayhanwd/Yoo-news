import React from 'react'
import News from '../news/News'

const FeaturePosts = () => {
    return (

        <div className="w-full md:w-2/3">
            <News />
            <News />
            <News />
            <News />
            <button className="flex-shrink-0 px-12 py-2 text-base font-semibold text-white bg-purple-600 shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                Load more....
            </button>
        </div>
    )
}

export default FeaturePosts
