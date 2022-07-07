import React from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  return (
    <div>
      <img style={styles.img} src={product.Image} alt={product.title} />
      <div style={styles.infoTextContainer}>
        <div style={styles.infoText}>
          <h1>{product.title}</h1>
          <span>${product.price}</span>
          <p>{product.description}</p>
        </div>
        <Link to="/cart">
          <button>Finalizar compra</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItem: "center",
  },
  img: {
    width: "40%",
  },
  infoTextContainer: {
    display: "flex",
    flexDirection: "column",
  },
  infoText: {
    padding: "10px",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
};

export default ItemDetail;
