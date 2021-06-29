import axios from "axios";
import React, { useEffect} from "react";
import VideoInfo from "./VideoInfo";
import '../VideoContent.css'
// const server="http://localhost:8000/"
const server="https://y-clone.xyz/"


function VideoArea(props) {
  console.log(props);
  // let [state,setState]=useState()
  // setState(props)
  useEffect(() => {
    axios.post(
      server,"/views",
      { videoId: props.props._id },
      { headers: { "x-access-token": localStorage.getItem("token") } }
    );
  }, []);
  return (
    <>
      <div className="video_div">
        <video autoPlay className="video_area" controls>
          <source
            src={server,"/Videos/" + props.props._id + ".mp4"}
            type="video/mp4"
          />
        </video>
        <VideoInfo info={props.props.discription} props={props.props} />
        <hr style={{ borderTop: "1px solid grey" }} />
      </div>
    </>
  );
}

export default VideoArea;
