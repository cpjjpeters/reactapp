import { useState } from "react"

export function TestFunction(){
  const[isOpen, setIsOpen] = useState(true)
  return(
    <>
<h1>Testing</h1>
  <button onClick={() => setIsOpen(!isOpen)}>
  {isOpen ? "Close the gate" : "Open the gate"}
  </button>

<h2>The gate is {isOpen ? "OPEN": "CLOSED"}</h2>

    </>
    
  )
}