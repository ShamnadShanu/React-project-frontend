import React, { useEffect, useState } from "react";
import Header from "../../Componets/Header/Header";
import Sidebar from "../../Componets/Sidebar/Sidebar";
import "./ChannelViewPage.css";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import ChannelViewVideos from '../../Componets/ChannelViewVideos/ChannelViewVideos'
import PlaylistCard from "../../Componets/PlaylistCard/PlaylistCard";
import PlaylistSection from "../../Componets/PlaylistSection/PlaylistSection";
// const server="http://localhost:8000/"
const server="https://y-clone.xyz/"
function ChannelViewPlaylistPage(props) {
    let history=useHistory()
  let [channelName, setChannelName] = useState();
  let [channelImage, setChannelImage] = useState();
  let [channelId, setChannelId] = useState();
  let [subscribed,setSubscribed]=useState()
  let [subscriberCount, setSubscriberCount] = useState();
  useEffect(() => {
   axios.post(
      server,"/channelview",
      {
        channelId: props.location.state.channelId,token:localStorage.getItem("token")
      }
    )
      .then((response) => {
        setChannelName(response.data.response.channelName);
        setChannelImage(response.data.response.channelImage);
        setChannelId(response.data.response._id);
        setSubscribed(response.data.subscribed)

        if (response.data.response.subscribers) {
          setSubscriberCount(response.data.response.subscribers.length);
        } else {
          setSubscriberCount(0);
        }
      });
      

      
  }, []);
    return (
        <div className="channel_page">
        <Header />
        <div className="channel_container">
          <Sidebar />
          <div className="channel_body">
            <div className="channel_header">
              <div className="channeldet">
                {" "}
                <img src={channelImage} alt="" />
                <div className="aaa">
                  <h2>{channelName}</h2>
                  <p>
                    <span>{subscriberCount}</span> Subscribers
                  </p>
                </div>
              </div>
              {subscribed ? (
              <Button
                onClick={() => {
                  axios
                    .post(
                      server,"/unsubscribe",
                      { channelId: props.location.state.channelId },
                      {
                        headers: {
                          "x-access-token": localStorage.getItem("token"),
                        },
                      }
                    )
                    .then((response) => {
                      setSubscriberCount(response.data);
                      setSubscribed(false);
                    });
                }}
                className="subcribed_button"
              >
                SUBSCRIBED
              </Button>
            ) : (
              <Button
                onClick={() => {
                {localStorage.getItem('token') ?axios
                    .post(
                      server,"/subscribe",
                      { channelId:props.location.state.channelId },
                      {
                        headers: {
                          "x-access-token": localStorage.getItem("token"),
                        },
                      }
                    )
                    .then((response) => {
                      setSubscriberCount(response.data);
                      setSubscribed(true);
                    }): history.push({
                      pathname: "/login",
                      // state: {
                      //   red:props.props.props.item,
                      // },
                    });}
                }}
                className="subcribe_button"
              >
                SUBSCRIBE
              </Button>
            )}
            </div>
            <div className="channel_navbar">
              <Link active to={{
                pathname:"/channelview",
                state:{
                  channelId:channelId
                }
              }} className="channel_nav">
                HOME
              </Link>
              <Link to={{
                pathname:"/channelviewvideos",
                state:{
                  channelId:channelId
                }
              }} style={{}} className="channel_nav">
                VIDEOS
              </Link>
              <Link  to={{
              pathname:"/channelviewplaylist",
              state:{
                channelId:channelId
              }
            }} className="channel_nav">
              PLAYLISTS
            </Link>
            </div>
            <div className="channel_content-h">
             <PlaylistSection channelId={channelId}/>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ChannelViewPlaylistPage
