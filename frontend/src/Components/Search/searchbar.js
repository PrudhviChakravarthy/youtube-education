import React from 'react'
import { useState } from 'react'

export default function Search(props) {
    const [link, setLink] = useState('')
    function link_change(){
        const uid = link.includes("youtube.com") ? link.split("v=")[1] : link.split("?si=")[0].split("/")[3]
        console.log(uid)
        props.setid(uid)
    }
  return (
    <div>
      input link: <input type="text" onChange={(e)=>setLink(e.target.value)}/>
      <button onClick={link_change}>Get Embeded Video</button>
    </div>
  )
}
