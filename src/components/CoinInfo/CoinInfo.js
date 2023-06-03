import React from 'react'
import { useState } from 'react';
import "./style.css";
function CoinInfo({ name, description }) {
  const shortdesc = description.slice(0, 300)+"<span style='color:var(--grey)'>Readmore!...</span>";
  const longdesc = description+"<span style='color:var(--grey)'>Readless!...</span>";
  const [flag,setFlag] = useState(true);
  
  return (
    <div className="grey-wrapper" onClick={() => setFlag(!flag)}>
      <h2 className='coin-name-coin-info'>{name}</h2>
      {description.length > 300 ? (
        <p
          className="coin-desc"
          dangerouslySetInnerHTML={{ __html: flag ? shortdesc : longdesc }}
        ></p>
      ) : (
        <p
          className="coin-desc"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      )}
    </div>
  );
}

export default CoinInfo