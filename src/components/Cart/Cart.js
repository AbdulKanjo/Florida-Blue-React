import React from "react";

export default function Cart(props) {
  let list = props.cart.map((e, i) => {
    return (
      <div key={i}>
        <div>{e}</div>
        <button onClick={() => props.addBackToList(e)}>Add back to list</button>
      </div>
    );
  });
  return <div>{list}</div>;
}
