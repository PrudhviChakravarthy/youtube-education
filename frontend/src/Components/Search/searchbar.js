import React from 'react'
import { useState } from 'react'

export default function Search(props) {
    const [link, setLink] = useState('')
    const [finallink , setfinallink] = useState('')
    function link_change(){
        console.log(link.indexOf("&pp"))
        setfinallink(link)
        if (link.indexOf("&t") !== -1){
              setfinallink(link.split("&t")[0])
        }else if (link.indexOf("&pp") !== -1){
            setfinallink(link.split("&pp")[0])
        }
        const uid = finallink.includes("youtube.com") ? 
              finallink.split("v=")[1] : finallink.split("?si=")[0].split("/")[3]
        console.log(finallink)
        props.setid(uid)
    }
  return (
    <div>
      input link: <input type="text" onChange={(e)=>setLink(e.target.value)}/>
      <button onClick={link_change}>Get Embeded Video</button>
    </div>
  )
}
