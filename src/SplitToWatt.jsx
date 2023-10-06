import React from 'react'
import { useState } from 'react'

const calculate = (split) => {
    const wattage = Math.floor(Math.pow(split/703.0861802, -1/0.3333008225));
    if(!split){
        return (
        <p>
            Not paddling!
        </p>
        )
    } else {
        return (
        <p>
            Paddling at {wattage} Watts!
        </p>
        )
    }
}

const SplitToWatt = () => {
    // useState hook
    const [display, setDisplay] = useState(false)
    const [split, setSplit] = useState(0);
  
    return (
      <>
  
        <div id='formDiv'>
  
          <h2 id='wattToSplit'>
            Split to Wattage Calculator
          </h2>
  
          <p id='wattToSplitInfo'>
            Calculate your flywheel wattage for any given 500m paddle erg split time. Your 500m split time is the time it would take to paddle 500m at your current pace. 
          </p>
         

          <form>
            <label htmlFor='wattage'>Enter Split: </label>
            <input type='number' id='splitMins' min='0' placeholder='minutes'></input>
            <input type='number' id='splitSecs' min='0' placeholder='seconds'></input>
          </form>
  
          <button id='calc' onClick={() => {
            setDisplay(true)
            const secs = 60*parseInt(document.getElementById('splitMins').value) + parseInt(document.getElementById('splitSecs').value);
            setSplit(secs)
            console.log(secs)
            }}>
            Calculate
          </button>

          {display && calculate(split)}
          
        </div>

  
      </>
    )
  }


export default SplitToWatt;