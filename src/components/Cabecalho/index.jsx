import React from "react";
import "../../assets/cabecalho-style/style.css";
import logo from "../../assets/img/bushi-logo.svg";
import { Link } from "react-router-dom";



function Cabecalho() {
  return (
    <header className="cabecalho">
      <nav className="navegacao">
        <Link to="/">
        <img className="navegacao__logo" src={logo} alt="" />
        </Link>
      </nav>
    </header>
  );
}

export default Cabecalho;
