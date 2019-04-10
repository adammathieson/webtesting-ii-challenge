import React from 'react';

function Display(props) {
  const { strike, ball, foul, hit, out } = props.count;
  return (
    <div>
      <h2>Pitch Count</h2>
        <div className='strikes'>
          <h3>Strikes: <span>{strike}</span></h3>
          <p></p>
        </div>
        <div className='balls'>
          <h3>Balls: <span>{ball}</span></h3>
        </div>
        <div className='fouls'>
          <h3>Fouls: <span>{foul}</span></h3>
        </div>
        <div className='hits'>
          <h3>Hits: {hit}</h3>
        </div>
        <div className='outs'>
          <h3>Outs: {out}</h3>
        </div>
    </div>
  )
}

export default Display;
