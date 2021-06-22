import React, { useState } from 'react'
import './ChannelRow.css'
import {Avatar} from "@material-ui/core"
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined"
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
function ChannelRow({subscribed,channelId,image,channel,subs,verified,noOfVideos,description}) {
    let history=useHistory()
    let [Subscribed,setSubscribed]=useState(subscribed)
    let [subscriberCount, setSubscriberCount] = useState(null);
    return (
        <div className="channelRow">
              <Link className="channelRow" to={{
              pathname: '/channelview',
              state: {
                channelId:channelId
              }
            }}>
                <Avatar className="channelRow__logo" alt={channel} src={image} />
            <div className="channelRow__text">
                <h4>{channel} {verified && <VerifiedIcon/>}</h4>
                <p>{subscriberCount?subscriberCount:subs} Subscribers . {noOfVideos} Videos</p> 
                <p>{description}</p>
            </div>
            </Link>
            
            <div className="subs">
            {Subscribed ? (
            <Button
              onClick={() => {
                axios
                  .post(
                    "/unsubscribe",
                    { channelId:channelId},
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
          ) :(
            <Button
              onClick={() => {
              {localStorage.getItem('token') ?axios
                  .post(
                    "/subscribe",
                    { channelId:channelId},
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
          )}            </div>
        </div>
    )
}

export default ChannelRow
