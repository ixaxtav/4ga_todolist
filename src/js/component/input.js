import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap';

class Input extends React.Component {
 constructor(props) {
  super(props);
 }
 
 render() {
  return (
      <form className='input'>
          <input type="text" className="form-control" placeholder=" What needs to be done?" onkeypress="handleClickPress(event)"></input>
      </form>
  );
 }
}


export default Input;