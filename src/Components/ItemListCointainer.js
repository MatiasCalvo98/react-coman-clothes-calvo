import React from "react";

const ItemListContainer = (miFlow) => {
  return (
    <>
      <div style={styles.container}>{miFlow.greeting}</div>
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
