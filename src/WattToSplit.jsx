import React from 'react'
import { useState } from 'react'

const calculate = (numWatts) => {
    const time = Math.floor(703.0861802*Math.pow(numWatts, -0.3333008225));
    const mins = Math.floor(time/60);
    const secsTens = Math.floor((time%60)/10);
    const secsOnes = (time%60)%10;
    if(!numWatts){
        return (
        <p>
            Not paddling!
        </p>
        )
    } else {
        return (
        <p>
            Paddling at {mins}:{secsTens}{secsOnes} / 500m split!
        </p>
        )
    }
}

const WattToSplit = () => {
  // useState hook
  const [display, setDisplay] = useState(false)
  const [wattage, setWattage] = useState(0);

  return (
    <>

      <div id='formDiv'>

        <h2 id='wattToSplit'>
          Wattage to Split Calculator
        </h2>

        <p id='wattToSplitInfo'>
          Calculate your 500m paddle erg split time for any given wattage input. Your 500m split time is the time it would take to paddle 500m at your current pace. 
        </p>
       
        <form>
          <label htmlFor='wattage'>Enter Wattage: </label>
          <input type='number' id='wattage' min='0' placeholder='watts'></input>
        </form>

        <button id='calc' onClick={() => {
          setDisplay(true)
          setWattage(document.getElementById('wattage').value)
          }}>
          Calculate
        </button>

        {display && calculate(wattage)}
        
      </div>

    </>
  )
}

export default WattToSplit;