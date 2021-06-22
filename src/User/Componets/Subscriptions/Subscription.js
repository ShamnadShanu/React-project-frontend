import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChannelRow from "../ChannelRow/ChannelRow";
import './Subscription.css'

function Subscription() {
  let [channel, setChannel] = useState([]);
  useEffect(() => {
    axios.post("https://y-clone.xyz/get-subscribers",{},{
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((response)=>{
setChannel(response.data)
    })
  }, []);
    return (
      <div className="recomentedVideo-s">
      <h5>Subscriptions</h5>
      <hr />
      <div className="Subscriptions">
      {channel.map((item, index) => {
          return (
          
                  <ChannelRow
                  subscribed={true}
                    channelId={item._id}
                    image={item.channelImage}
                    channel={item.channelName}
                    verified
                    subs={item.subscribers?item.subscribers.length:0}
                    noOfVideos={5}
                    description="Discriprion"
                    />
          );})}
     
      </div>
       </div>
    )
}

export default Subscription
