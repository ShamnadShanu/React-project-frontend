import React from 'react'
import Header from '../../Componets/Header/Header'
import LikedVideos from '../../Componets/LikedVideos/LikedVideos'
import Sidebar from '../../Componets/Sidebar/Sidebar'
import './LikedVideosPage.css'

function LikedVideosPage() {
    return (
        <div>
            <Header/>
            <div className="app_page">
                <Sidebar/>
                <LikedVideos/>
            </div>
        </div>
    )
}

export default LikedVideosPage
