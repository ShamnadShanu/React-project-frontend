import React, { useEffect,useState } from "react";
import Header from "../../Componets/Header/Header";
import Sidebar from "../../Componets/Sidebar/Sidebar";
import "./ChannelPage.css";
import Button from "@material-ui/core/Button";
// import ChannelVideos from "../../Componets/ChannelVideos/ChannelVideos";
import { Link } from "react-router-dom";
import axios from "axios";
import Playlists from "../../Componets/Playlists/Playlists";

function ChannelPlaylistPage() {
  let [channelName,setChannelName]=useState()
  let [channelImage,setChannelImage]=useState()
  let [channelId,setChannelId]=useState()
  let [subscriberCount,setSubscriberCount]=useState()
  useEffect(()=>{
axios.post('https://y-clone.xyz/getChannel',{},{
  headers:{
    "x-access-token": localStorage.getItem("token")
  }
}).then((response)=>{
 setChannelName(response.data.channelName);
 setChannelImage(response.data.channelImage)
 setChannelId(response.data._id)
 if(response.data.subscribers){
  setSubscriberCount(response.data.subscribers.length)
 }else{
  setSubscriberCount(0)
 }})
  },[])
  return (
    <div className="channel_page">
      <Header />
      <div className="channel_container">
        <Sidebar />
        <div className="channel_bodyy">
          <div className="channel_header">
            <div className="channeldet">
              {" "}
              <img
                src={channelImage}
                alt=""
              />
              <div className="aaa">
                <h2>{channelName}</h2>
                <p><span>{subscriberCount}</span> Subscribers</p>
              </div>
            </div>
            <Button className="buttons" variant="contained" color="primary">
              CUSTOMISE CHANNEL
            </Button>
            <Link to={{pathname:"/managevideos",
          state:{
            channelId:channelId
          }}}><Button className="buttons" variant="contained" color="primary">
              MANAGE VIDEOS
            </Button></Link>
          </div>
          <div className="channel_navbar">
            <Link to="/channelhome" className="channel_nav">
              HOME
            </Link>
            <Link to="/channelvideos" className="channel_nav">
              VIDEOS
            </Link>
            <Link to="/channelplaylist" className="channel_nav">
              PLAYLISTS
            </Link>
          </div>
          <div className="channel_content">
           {channelId&&<Playlists channelId={channelId}/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChannelPlaylistPage;
