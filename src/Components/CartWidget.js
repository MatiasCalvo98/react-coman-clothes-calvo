import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const CartWidget = () => {
  return <LocalMallIcon style={styles.cartBag} fontSize="large" />;
};

const styles = {
  cartBag: {
    color: "white",
    marginRight: "10",
  },
};

export default CartWidget;
