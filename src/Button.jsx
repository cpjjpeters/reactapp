
import { useState } from 'react'
export function Button(){

  let number = 9 
  let displayString
  // if (number >10) {
  //   displayString = 'Big number'
  // }
  // else {
  //   displayString = "Small number"
  // }
    const [count, setCount] = useState(0)

    function handleEvent()
  {
    setCount(count+1)
    console.log("State has incremented by 1")
  }
  return(
    // <button onClick={() => setCount(count + 1)}>

    <button onClick={() => handleEvent()}>
      {/* <p>Testing {displayString}</p> */}
      <p>{count}</p>
    </button>
  )
}