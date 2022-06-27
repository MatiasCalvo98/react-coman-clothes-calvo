import React from "react";
import ItemCount from "./ItemCount.jsx";

const ItemListContainer = (miFlow) => {
  const onAdd = () => {
    alert("Gracias por tu compra! :D");
  };

  return (
    <>
      <div style={styles.container}>{miFlow.greeting}</div>
      <ItemCount stock={7} onAdd={onAdd} />
    </>
  );
};

export default ItemListContainer;

const styles = {
  container: {
    fontSize: 36,
    textAlign: "center",
  },
};
