import React, { useEffect, useState } from "react";
import products from "../Data/Index.js";
//import ItemCount from "./ItemCount.jsx";
import ItemList from "./ItemList";

const promesa = new Promise((res, rej) => {
  setTimeout(() => {
    res(products);
  }, 2000);
});

export default function ItemListContainer() {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    promesa.then((response) => {
      setLoading(false);
      setProductsList(response);
    });
  }, []);

  if (loading) {
    return (
      <>
        <h1>Cargando...</h1>
      </>
    );
  }

  return (
    <div>
      <ItemList productos={productsList} />
    </div>
  );
}

/*const  = (miFlow) => {
  const onAdd = () => {
    alert("Gracias por tu compra! :D");
  };
  ESTO IBA EN EL RETURN
  <div style={styles.container}>{miFlow.greeting}</div>
  <ItemCount stock={7} onAdd={onAdd} />  
*/

/*const styles = {
  container: {
    fontSize: 36,
    textAlign: "center",
  },
};*/
