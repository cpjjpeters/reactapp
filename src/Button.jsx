

export function Button(){

  let number = 9 
  let displayString
  if (number >10) {
    displayString = 'Big number'
  }
  else {
    displayString = "Small number"
  }
  return(
    <button>
      <p>Testing {displayString}</p>
    </button>
  )
}