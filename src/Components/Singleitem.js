import React from "react";
import "./Singleitem.css";
import { connect } from "react-redux";

function Singleitem({ cart, toggle, remove}) {
  return (
    <div>
      {cart.map((item) => {
        const { id, name, price, img, amount } = item;
        return (
          <div key={id} className="itemcontainer">
            <p>
              <img src={img} alt="hyee" />
            </p>
            <div className="singleitem_valuecontainer">
              <h2>{name}</h2>
              <h3>{price} PKR</h3>
              <button
                className="singleitem_remove_btn"
                onClick={() => remove(id)}
              >
                Remove
              </button>
            </div>
            <div className="single_item_btn_container">
              <img
                src="https://img.icons8.com/fluency/48/null/collapse-arrow.png"
                alt=""
                className="pointer"
                onClick={() => toggle("incre", id)}
              />
              <br />
              <h2 className="singleitem_value">{amount}</h2>
              <br />
              <img
                src="https://img.icons8.com/fluency/48/null/expand-arrow.png"
                alt=""
                className="pointer"
                onClick={() => {
                  if (amount <= 1) {
                    remove(id);
                  } else {
                    toggle("decre", id, amount);
                  }
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: (type, id, amount) =>
      dispatch({ type: "toggle", payload: { type, id, amount } }),
    remove: (id) => {
      dispatch({ type: "remove", payload: { id } });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Singleitem);
