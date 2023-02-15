import React from 'react';
import './navbar.css';
import { connect } from "react-redux"

function Navbar({ amount }) {
  return (
    <div className='container'>
      <h1 className='header'>Redux Tutorial</h1>
      <h1 className='value'>{amount}</h1>
    </div>
  )
}

const mapStateToProp = (state) => {
  return { ...state, amount: state.amount }
}

export default connect(mapStateToProp)(Navbar)