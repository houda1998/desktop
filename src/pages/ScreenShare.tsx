import React, { useState, useEffect, useRef } from 'react'
import { Button } from 'antd'
import Layout from "../components/CourseLayout"
import Sider from 'antd/lib/layout/Sider'
import ScreenShareLayout from '../components/ScreenShareLayout'
const RTCmulticonnection = require("rtcmulticonnection")
let hasjoined = false
function ScreenShare() {
    const [connection, setConnection] = useState<any>(null)
    const [stream, setStream] = useState<any>(null)
    const [canShareScreen, setCanShare] = useState(true)
    const videoContainer = useRef<HTMLVideoElement>(null);
    console.log("can",canShareScreen)
    useEffect(() => {
        const connection = new RTCmulticonnection()
        setConnection(connection)
        
       const interval =  setInterval(()=>{
            connection.checkPresence("hehe xd",function(isSharing:any){
                setCanShare(!isSharing)
                connection.sdpConstraints.mandatory = {
                    OfferToReceiveAudio: false,
                    OfferToReceiveVideo: true
                };
            })
        },1000)

        return ()=> {
            console.log("removing interval ")
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        if (connection && connection != null) {
            console.log(connection)
            connection.socketURL = 'http://localhost:3009/';
            connection.socketMessageEvent = 'screen-sharing-demo';
            connection.session = {
                screen: true,
                oneway: true
            };
            connection.sdpConstraints.mandatory = {
                OfferToReceiveAudio: false,
                OfferToReceiveVideo: false
            };
        connection.iceServers = [{
            'urls': []
        }];
        connection.videosContainer = document.getElementById('videos-container');
        connection.onstream = function (event : any) {
            console.log("on strem")
            setCanShare(false)
            setStream(event.stream)
        };

        connection.onstreamended = function (event:any) {
            connection.closeSocket(
            )
            hasjoined = false
            if(videoContainer?.current){
                videoContainer.current.pause()
                videoContainer.current.srcObject = null
            }
        };

        connection.onMediaError = (err:any) => console.log("media error !",err)
    }
    }, [connection])
  
    useEffect(()=>{
        if(stream && videoContainer.current){
            
            videoContainer.current.srcObject = stream
            videoContainer.current.play()
        }
    },[stream])

    if(!canShareScreen && !hasjoined){
        console.log("joining")
        connection?.join("hehe xd", function() {
            console.log("sharing is caring !")
        });
        hasjoined=true;
    }

    return (
        <ScreenShareLayout>
            <video controls id="videos-container" ref={videoContainer}   height={500} style={{width:"-webkit-fill-available"}} ></video>
            <br></br>
            <Button 
            disabled={!canShareScreen}
            onClick={()=> {
                    connection?.open("hehe xd", function() {
                        console.log("sharing is caring !")
                    });
            }}
            >Screen Share</Button>
        </ScreenShareLayout>
    )
}

export default ScreenShare
