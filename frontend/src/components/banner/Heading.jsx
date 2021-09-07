import React from 'react'
import Slider from './Slider'
import TopCategory from './TopCategory'

const Heading = () => {
    return (

        <div className="sm:flex flex-wrap justify-center items-center gap-8">
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4">
                <TopCategory />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4">
                <Slider />
            </div>
            {/* <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
              
               
            </div> */}
        </div>

    )
}

export default Heading
