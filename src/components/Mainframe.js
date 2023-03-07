import React from 'react';
import bgVideo from "../assets/resources/videos/Tesla_cinematic_intro.mp4";
import "../assets/css/Mainframe.css";

const Mainframe = () => {
  return (
    <div className ="mainFrameRoot">
      <video src={bgVideo} autoPlay={true} muted={true} loop width="100%"/>
    </div>
  )
}

export default Mainframe
