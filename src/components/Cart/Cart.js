import React from "react";

export default function Cart(props) {
  let list = props.cart.map((e, i) => {
    return (
      <div key={i}>
        <div>{e}</div>
        <button onClick={() => props.addBackToList(e)}>Add to cart</button>
      </div>
    );
  });
  return <div>{list}</div>;
}
