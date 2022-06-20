import React from "react";
import logo from "../../assets/logo1.png";
import LocalMallIcon from "@mui/icons-material/LocalMall";
//import "./Navbar.css";

const Navbar = () => {
  return (
    <header style={styles.container}>
      <img style={styles.imagen} src={logo} alt="logo" />
      <h1 style={styles.title}>Coman Clothes</h1>
      <nav style={styles.navStyle}>
        <a style={styles.anchors} href="#">
          Inicio
        </a>
        <a style={styles.anchors} href="#">
          Productos
        </a>
        <a style={styles.anchors} href="#">
          Contacto
        </a>
        <a style={styles.anchors} href="#">
          Guia de Talles
        </a>
        <a style={styles.anchors} href="#">
          Envios
        </a>
        <a style={styles.anchors} href="#">
          Quienes Somos
        </a>
        <LocalMallIcon style={styles.cartBag} fontSize="large" />
      </nav>
    </header>
  );
};

const styles = {
  container: {
    background: "black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    margin: 10,
    textDecoration: "none",
    color: "white",
    fontSize: "40px",
  },
  navStyle: {
    display: "flex",
    justifyContent: "space-between",
  },
  imagen: {
    width: "4%",
    marginLeft: "0.625rem",
  },
  cartBag: {
    color: "white",
    marginRight: "10",
  },
  anchors: {
    margin: 10,
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
  },
};

export default Navbar;
