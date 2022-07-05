import React from "react";
import Item from "./Item";

export default function ItemList({ productos }) {
  return (
    <div>
      {productos.map((elem) => {
        return <Item key={elem.id} elem={elem} />;
      })}
    </div>
  );
}
