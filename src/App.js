import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import CartContainer from "./Components/Cartcontainer";
import Footer from "./Components/Footer";
import reducer from "./reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
      <Footer />
    </Provider>
  );
}

export default App;
