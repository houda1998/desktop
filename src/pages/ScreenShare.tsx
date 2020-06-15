import React, { useState, useEffect, useRef } from 'react'
import { Button } from 'antd'
import Layout from "../components/CourseLayout"
import {desktopCapturer}  from 'electron';
const RTCmulticonnection = require("rtcmulticonnection")
function ScreenShare() {
    const [connection, setConnection] = useState<any>(null)
    const [stream, setStream] = useState<any>(null)
    const videoContainer = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        setConnection(new RTCmulticonnection())
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

            setStream(event.stream)
        };

        connection.onstreamended = function (event:any) {
            var mediaElement:any = document.getElementById(event.streamid);
            if (mediaElement) {
                mediaElement.parentNode.removeChild(mediaElement);

                if (event.userid === connection.sessionid && !connection.isInitiator) {
                    alert('Broadcast is ended. We will reload this page to clear the cache.');
                    //location.reload();
                }
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
    useEffect(()=>{
        if(connection){
            connection.checkPresence("hehe xd",function(xd:any){console.log(xd)})
            
        }
     })
    return (
        <Layout>
            <script src="node_modules/socket.io-client/dist/socket.io.js"></script>
            <video controls id="videos-container" ref={videoContainer}   height={500} ></video>
            <Button onClick={()=> {
                desktopCapturer.getSources({ types:['window', 'screen'] }).then ((sources)=>{
                    console.log(sources)
                    connection?.open("hehe xd", function() {
                        console.log("sharing is caring !")
                    });
                })
              
            }}
            >Screen Share</Button>
       
            <Button onClick={()=> {
                if(connection)
                    connection.sdpConstraints.mandatory = {
                        OfferToReceiveAudio: false,
                        OfferToReceiveVideo: true
                    };
                    connection?.join("hehe xd");
            }}>View Share</Button>


        </Layout>
    )
}

export default ScreenShare
