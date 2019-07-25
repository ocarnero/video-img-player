// use jsx to render html, do not modify simple.html

import BannerAnim from "rc-banner-anim";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import React from "react";
import ReactPlayer from "react-player";
import { source } from "./player-source";
import Bubble from "./bubble";

const { Element } = BannerAnim;
const BgElement = Element.BgElement;

function Player() {
  const listItems = source.map((e, i) => {
    if (e.type === "image") {
      return (
        <Element key={i} prefixCls="banner-user-elem" leaveChildHide>
          <BgElement key="bg" className="bg">
            <img src={e.src} alt="img" />
          </BgElement>

          <QueueAnim name="QueueAnim">
            <h1 key="h1">{e.header}</h1>
            {/* <p key="p">{e.paragraph}</p> */}
          </QueueAnim>
          <TweenOne
            animation={{ y: 50, opacity: 0, type: "from", delay: 3000 }}
            name="TweenOne"
          >
            {e.paragraph}
          </TweenOne>
        </Element>
      );
    }
    if (e.type === "youtube") {
      return (
        <Element key={i} prefixCls="banner-user-elem" leaveChildHide>
          <BgElement key="bg" className="bg">
            <ReactPlayer url={e.src} playing height="100%" width="100%" />
          </BgElement>
        </Element>
      );
    }
    return <div />;
  });

  return (
    <React.Fragment>
      <Bubble />
      <BannerAnim>{listItems}</BannerAnim>
    </React.Fragment>
  );
}

export default Player;
