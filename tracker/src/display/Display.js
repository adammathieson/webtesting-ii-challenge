import React from 'react';

function Display(props) {
  return (
    <div>
      <h2>Pitch Count</h2>
        <div className='strikes'>
          <h3>Strikes</h3>
          <p></p>
        </div>
        <div className='balls'>
          <h3>Balls</h3>
          <p></p>
        </div>
        <div className='fouls'>
          <h3>Fouls</h3>
          <p></p>
        </div>
        <div className='outs'>
          <h3>Outs</h3>
          <p></p>
        </div>
    </div>
  )
}

export default Display;
