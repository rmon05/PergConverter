import React from 'react'
import { useState } from 'react';
import WattToSplit from './WattToSplit';
import SplitToWatt from './SplitToWatt';

const TypeBar = () => {
  const [type, setType] = useState(0);
  
  return (
    <>
      <div id='typeBar'>
        <button className='selectButton' onClick={() => {
          setType(0);
        }}>
            Convert Wattage to Split
        </button>
        <button className='selectButton' onClick={() => {
          setType(1);
        }}>
            Convert Split to Wattage
        </button>
      </div>
      
      {(type==0) && <WattToSplit></WattToSplit>}
      {(type==1) && <SplitToWatt></SplitToWatt>}

    </>

  )
}

export default TypeBar