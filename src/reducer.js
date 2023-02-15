import array from "./Components/cartitem_array";
const initialstate = {
  cart: array,
  amount: 0,
  total: 0,
};

function reducer(state = initialstate, action) {
  if (action.type === "clearAll") {
    return { ...state, cart: [] };
  }
  if (action.type === "toggle") {
    const cart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        if (action.payload.type === "incre") {
          item = { ...item, amount: item.amount + 1 };
        } else if (action.payload.type === "decre") {
          return (item = { ...item, amount: item.amount - 1 });
        }
      }
      return item;
    });
    return { ...state, cart: cart };
  }
  if (action.type === "remove") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
  }
  if (action.type === "total") {
    let { amount, total } = state.cart.reduce((values, item) => {
      values.amount += item.amount
      const total = item.price * item.amount
      values.total += total
      console.log(values);
      return values
    }, {
      amount: 0,
      total: 0,
    });
    return { ...state , amount , total};
  }
  return state;
}
export default reducer;
