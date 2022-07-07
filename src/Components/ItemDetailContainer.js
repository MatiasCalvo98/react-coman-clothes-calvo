import React, { useEffect, useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";
import ItemDetail from "./itemDetail.js";
import { useParams } from "react-router-dom";
//import products from "../Data/Index.js";

/*const promesa = new Promise((res, rej) => {
  setTimeout(() => {
    res(products);
  }, 2000);
});*/

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loaded, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    /*setLoading(true);
    promesa.then((response) => {
      setLoading(false);
      setProduct(response);
    });*/
    fetch("src/Data/Index.js")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err))
      .finally(() => setTimeout(setLoading(false)), 2000);
  }, [productId]);

  return (
    <>
      {loaded ? (
        <ClimbingBoxLoader style={styles.spinner} />
      ) : (
        <ItemDetail product={product} />
      )}
    </>
  );
};

const styles = {
  spinner: {
    display: "block",
    margin: "auto",
  },
};

export default ItemDetailContainer;
