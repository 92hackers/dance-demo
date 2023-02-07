/**
 * Video component, based on video-react
 */

import React, {useState, useRef} from "react";

import { Player, BigPlayButton, ControlBar, LoadingSpinner } from 'video-react'
import "video-react/dist/video-react.css"; // import css

import styles from './index.module.scss'

export interface VideoProps {
  poster: string
  src: string,
  onPlay: Function,
}

export default function Video({
  onPlay,
  poster,
  src,
}: VideoProps): React.ReactElement {
  const [play, setPlay] = useState<boolean>(false);
  let player = useRef(null);

  function handlePlay() {
    setPlay(true)
    onPlay()
  }

  return (
    // use id becase add the weight
    <div id={styles.videoWrapper}>
      <Player
        poster={!play && poster} // fix the poster not hidden in wechat environment
        src={src}
        preload="metadata"
        onPlay={handlePlay}
        ref={player}
      >
        <LoadingSpinner/>
        <BigPlayButton position="center" style={{display: "none"}}/>
        <ControlBar
          className={styles.videoControlBar}
          autoHide
        />
      </Player>
    </div>
  )
}