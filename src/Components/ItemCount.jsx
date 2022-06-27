import { display } from "@mui/system";
import React, { useState } from "react";

const ItemCount = ({ stock, initial = 0, onAdd }) => {
  const [cuenta, setCuenta] = useState(initial);

  const sumar = () => {
    cuenta < stock && setCuenta(cuenta + 1);
    cuenta >= stock && alert("No hay stock :c");
  };

  const restar = () => {
    setCuenta(Math.max(cuenta - 1, 0));
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      paddingBottom: 10,
      paddingLeft: 10,
    },

    buttonStyle: {
      width: "auto",
      color: "#ffff",
      backgroundColor: "black",
      borderRadius: 5,
      padding: 0,
    },

    purchaseStyle: {
      width: "auto",
      heigth: "auto",
      color: "#ffff",
      backgroundColor: "black",
      borderRadius: 5,
      marginLeft: 10,
    },

    pStyle: {
      textAlign: "center",
      fontSize: 20,
      paddingLeft: 10,
      paddingRight: 10,
    },

    operationStyle: {
      textAlign: "center",
      fontSize: 20,
      margin: 5,
    },
  };

  return (
    <>
      <div style={styles.container}>
        <button onClick={restar} style={styles.buttonStyle}>
          <p style={styles.operationStyle}>-</p>
        </button>
        <p style={styles.pStyle}>{cuenta}</p>
        <button onClick={sumar} style={styles.buttonStyle}>
          <p style={styles.operationStyle}>+</p>
        </button>
      </div>
      <button onClick={onAdd} style={styles.purchaseStyle}>
        Add to cart
      </button>
    </>
  );
};

export default ItemCount;
