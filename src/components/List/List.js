import React from "react";

export default function List(props) {
  let list = props.list.map((e, i) => {
    return (
      <div key={i}>
        <div>{e}</div>
        <button onClick={() => props.handleAddItemToCart(e)}>
          Add to cart
        </button>
      </div>
    );
  });
  return <div>{list}</div>;
}
