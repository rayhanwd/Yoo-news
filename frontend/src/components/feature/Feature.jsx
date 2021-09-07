import React from 'react'
import FeaturePosts from './FeaturePosts'
import SideBar from './SideBar'

const Feature = () => {
    return (
        <div className="bg-lightblue py-20 px-4">
            <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
                {/* FeaturePosts */}

                <FeaturePosts />
                
                {/* Sidebar */}

                <SideBar />

            </div>
        </div>
    )
}

export default Feature





