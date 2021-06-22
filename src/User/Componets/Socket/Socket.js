import React, { useEffect } from 'react'
import socketClient from 'socket.io-client'

const SERVER = "/";

function Socket() {
    var socket = socketClient (SERVER);
    useEffect(()=>{
        socket.emit("message", { a: "b", c: [] });
        socket.on('reply',(msg)=>{
            console.log(msg,"hih ihihihiihihihihi")
        })
    },[])


    return (
        <div>
            hi
        
        </div>
    )
}

export default Socket
