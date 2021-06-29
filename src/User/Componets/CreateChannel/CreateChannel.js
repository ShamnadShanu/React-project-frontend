import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './CreateChannel.css'
// const server="http://localhost:8000/"
const server="https://y-clone.xyz/"

function CreateChannel(props) {
    let history=useHistory()
    const [Cname,setCname]=useState(props.userName)
    const [channelImg,setChannelImg]=useState(props.picture)
    const [channelIMG,setChannelIMG]=useState()
    const [error,setError]=useState(false)
    return (
        <div className="create_channel">
            <h2>How you'll appear</h2>
            <hr />
        <div className="profile">
        <img  className="channel_img" src={channelImg} alt="" />
            <label className="profile_label">
                UPLOAD PICTURE
            <input id="channel_image" onChange={(e)=>{
setChannelImg(URL.createObjectURL(e.target.files[0]))
setChannelIMG(e.target.files[0])
            }} hidden type="file" />
            </label>
           <input className="channel_name" onChange={(e)=>{
         setCname(e.target.value)
         setError(false)
            }} type="text" value={Cname} />
            <p style={{color:"red"}}>{error}</p>
        </div>
        <div className="footer">
        <p style={{flex:"0.5",cursor:"pointer"}}>CANCEL</p>
        <p onClick={()=>{
            const data = new FormData();
            data.append("channelName", Cname);
            data.append("channelImage", channelIMG);
            console.log(data);
            axios.post(server,'/createChannel/',{data},{
                headers:{
                  "x-access-token": localStorage.getItem("token")
                }
              }).then((data)=>{
                  if(data.data){
                      history.push("/channel")
                  }else{
                    setError('Channel Name Already exist')
                  }
              })
        }} style={{marginLeft:"10px",cursor:"pointer", color:"blue", float:"right"}}>CREATE CHANNEL</p>
        </div>
        </div>
    )
}

export default CreateChannel
