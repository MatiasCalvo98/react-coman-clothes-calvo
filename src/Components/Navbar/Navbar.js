import React, { Children } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo1.png";
import CartWidget from "../CartWidget";
//import "./Navbar.css";

const Navbar = () => {
  return (
    <header style={styles.container}>
      <Link to="/inicio">
        <img style={styles.imagen} src={logo} alt="logo" />
      </Link>
      <h1 style={styles.title}>Coman Clothes</h1>
      <nav style={styles.navStyle}>
        <Link style={styles.anchors} to="/inicio">
          Inicio
        </Link>
        <Link style={styles.anchors} to="/productos">
          Productos
        </Link>
        <Link style={styles.anchors} to="/contacto">
          Contacto
        </Link>
        <Link style={styles.anchors} to="/talles">
          Guia de Talles
        </Link>
        <Link style={styles.anchors} to="/envios">
          Envios
        </Link>
        <Link style={styles.anchors} to="/quienes_somos">
          Quienes Somos
        </Link>
      </nav>
      <CartWidget />
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
    width: "50%",
    marginLeft: "0.625rem",
  },
  anchors: {
    margin: 10,
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
  },
};

export default Navbar;
