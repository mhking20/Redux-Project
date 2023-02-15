import React from "react";
import "./cartcontainer.css";
import Singleitem from "./Singleitem";
import { connect } from "react-redux";

function Cartcontainer({ dispatch , cart }) {
  React.useEffect(() => {
    dispatch({ type: "total" });
  }, [cart , dispatch]);
  return (
    <div className="cartcontainer">
      <h1 className="cartheader">Your Bag</h1>
      <Singleitem />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

export default connect(mapStateToProps)(Cartcontainer);
