import React from 'react';

import './Input.css';
 // program testing

const Input = props => {
  return (
    <div className="input">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        label={props.label}
        placeholder={props.placeholder}
        id={props.id}
        // value={props.value}
        // onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
