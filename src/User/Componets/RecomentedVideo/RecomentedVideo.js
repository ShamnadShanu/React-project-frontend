import axios from "axios";
import React, { useEffect, useState } from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./RecomentedVideo.css";
const server="http://localhost:8000"
// const server="https://y-clone.xyz"
export default function RecomentedVideo() {
  let [videos, setVideos] = useState([]);
  useEffect(() => {
    axios.post(server+"/getVideos").then((response) => {
      setVideos(response.data);
    });
  }, []);
  return (
    <div className="recomentedVideo">
      <h5>Recomented Video</h5>
      <div className="recomentedVideo_videos">
        {videos.map((item, index) => {
          return (
            <VideoCard
            verified={true}
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
  );
}
