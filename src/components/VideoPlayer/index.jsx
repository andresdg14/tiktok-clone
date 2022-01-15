import { useState, useRef } from 'react'
import styles from './index.module.css'

const SRC = 'https://v16-webapp.tiktok.com/9ef0f56d636a4a9b0d0a236760039e10/61e337ba/video/tos/useast2a/tos-useast2a-ve-0068c003/437d631f7d214dc4ac7e95d0982b92f3/?a=1988&br=2738&bt=1369&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_Fygkag3-I&l=202201151506560101890650800ABAD694&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzxvaDU6Zms0OTMzNzczM0ApNmY4Ojw1PGVnNzxoNTY4NGdjNGlecjQwZGtgLS1kMTZzczMtNi8uXmAxYDAxNC5gMTI6Yw%3D%3D&vl=&vr='

export default function VideoPlayer () {
  const [playing, setPlaying] = useState(false)
  const video = useRef()
  const handlePlay = () => {
    if (playing) {
      video.current.stop()
    } else {
      video.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <div>
      <video className={styles.video} src={SRC} controls={false} ref={video} />
      <button className={styles.player} onClick={handlePlay} />
    </div>
  )
}
