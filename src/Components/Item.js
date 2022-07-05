import React from "react";

const itemStyles = {
  container: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "black",
    width: "auto",
  },
  pStyle: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  imgStyle: {
    margin: "auto",
    display: "block",
    width: 480,
    height: 480,
  },
};

export default function Item({ elem }) {
  return (
    <div style={itemStyles.container}>
      <img
        style={itemStyles.imgStyle}
        src={elem.Image}
        alt="Imagen del producto"
      />
      <p style={itemStyles.pStyle}>{elem.title}</p>
      <p style={itemStyles.pStyle}>{elem.description}</p>
      <p style={itemStyles.pStyle}>{elem.price}</p>
    </div>
  );
}
