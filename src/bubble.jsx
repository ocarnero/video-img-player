import React from "react";
import { bubbleSource } from "./player-source";
import RoundedImage from "react-rounded-image";
import Popover from "react-popover";

function Bubble() {
  const msg1 = bubbleSource[0];
  return (
    <div class="bubble">
      <Popover
        isOpen
        preferPlace="right"
        body={<div class="popover">{msg1.msg}</div>}
      >
        <RoundedImage
          roundedSize="0"
          imageWidth="110"
          imageHeight="110"
          image={msg1.src}
        />
      </Popover>
    </div>
  );
}

export default Bubble;
