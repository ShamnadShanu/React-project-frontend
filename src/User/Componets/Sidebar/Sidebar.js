import React, { useState } from 'react'
import SidebarRow from '../SidebarRow/SidebarRow'
import './Sidebar.css'
import HomeIcon from '@material-ui/icons/Home'
// import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionIcon from '@material-ui/icons/Subscriptions'
// import videoLibraryIcon from '@material-ui/icons/VideoLibrary'
// import HistoryIcon from '@material-ui/icons/History'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import ThumpUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
// import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
import { Link } from 'react-router-dom'
// import WatchLater from '@material-ui/icons/WatchLater'

export default function Sidebar({Home,Subscription,Liked,Your}) {
    return (
        <div className="sidebar">
            <Link className="don" to="/"><SidebarRow Selected={Home} title="Home" Icon={HomeIcon}/></Link>
            <Link className="don" to="/subscriptions">
            <SidebarRow Selected={Subscription}  title="Subscription" Icon={SubscriptionIcon}/>
            </Link>
                        <hr/>
            {/* <SidebarRow title="Library" Icon={videoLibraryIcon}/> */}
            {/* <SidebarRow title="History" Icon={HistoryIcon}/> */}
<Link className="don" to="/channelvideos">            <SidebarRow Selected={Your} title="Your videos" onClick={()=>{
}} Icon={OndemandVideoIcon}/>
</Link>            {/* <SidebarRow title="Watch Later" Icon={WatchLater}/> */}
<Link className="don" to="/liked-videos">
<SidebarRow Selected={Liked}  title="Liked Videos" Icon={ThumpUpAltOutlinedIcon}/>

</Link>
            {/* <SidebarRow title="Show More" Icon={ExpandMoreOutlinedIcon}/> */}
        </div>
    )
}
