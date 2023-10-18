import './Card.css'
import React from "react";

export default (props) => {
  return (
    <div className='Card'>
      <div>{props.title}</div>
      <div>Contents</div>
    </div>
  );
};
