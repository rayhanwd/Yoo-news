import React from 'react'
import SideBar from './SideBar'
import TopBar from './TopBar'

const Main = () => {
    return (

        <div className="max-w-screen-xl">

            <div className="flex items-start gap-8 flex-wrap">
                <div className="w-1/6">
                    <SideBar />
                </div>
                <div className="w-1/6">
                    <TopBar />
                </div>
            </div>
        </div>

    )
}

export default Main
