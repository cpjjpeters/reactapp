import { useState } from 'react';

export function Textbox(){
  const [text, setText] = useState('')

  return(
<>
    // <input type="text" placeholder="Enter your name" />
    <input onChange={(e) => setText(e.target.value)}></input>

       <p>{text}</p> 
       </>
  )

}