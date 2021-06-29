import axios from 'axios'
import React, { useEffect, useState } from 'react'
import VideoCard from '../VideoCard/VideoCard'
import './ChannelViewVideos.css'
// const server="http://localhost:8000/"
const server="https://y-clone.xyz/"
function ChannelViewVideos(props) {
  console.log('sfsgs',props);
  const [content,setContent]=useState([])
  useEffect(()=>{
 axios.post(server,'/Channel_view-videos',{data:props.channelId},{
  headers:{
    "x-access-token": localStorage.getItem("token")
  }
}).then((response)=>{
  setContent(response.data)
})
  },[])
    return (
        <div className="recomentedVideo-m">
        <div className="recomentedVideo_videos-m">
        {content&&content.map((item, index) => {
              return (
                <VideoCard
                category={item.category}
                channelId={item.channelId}
                discription={item.discription}
                channelImage={item.channelImage}
                timestamp={item.timestamp}
                title={item.title}
                _id={item._id}
                channelName={item.channelName}
             views={item.views}
        />
              );
            })}
        </div>
      </div>
    )
}

export default ChannelViewVideos
