import React from 'react';

function GenderRatioBarGraph({ maleRatio, femaleRatio }) {
  // Calculate the width of the bars based on the gender ratios
  const maleBarWidth = `${maleRatio}%`;
  const femaleBarWidth = `${femaleRatio}%`;

  return (
      <div
          style={{
              maxWidth: '60%'
          }  
        }>
      <div
        style={{
          backgroundColor: '#44aedb',
          width: maleBarWidth,
          height: '30px',
          display: 'inline-block',
        }}
      >
      </div>
      <div
        style={{
          backgroundColor: '#eb81d7',
          width: femaleBarWidth,
          height: '30px',
          display: 'inline-block',
        }}
      >
        
      </div>
    </div>
  );
}

export default GenderRatioBarGraph;
