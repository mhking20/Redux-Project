import React from 'react';
import './Footer.css';
import {connect} from "react-redux";

function Footer({total , clearAll}) {
    return (
        <div className='foot_container'>
            <div className='foot_valuecontainer'>
                <h1 className='foot_header'>
                    Total Value
                </h1>
                <h2 className='foot_value'>
                    {total} Rs
                </h2>
            </div>
            <button className='foot_clearbtn' onClick={() => clearAll()}>Clear Items</button>
        </div>
    )
}

const mapStateToProps = state => {
  return {...state , total:state.total}
}

const mapDispatchToProps = (dispatch)=> {
    return {
        clearAll : () => dispatch({type : "clearAll" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);