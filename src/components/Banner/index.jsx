import React from 'react';
import bannerLogo from "../../assets/img/bushi-logo-banner.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "../../assets/banner-style/style.css"

function Banner(){

    return(<section className="banner">
    <div className="banner__imagem">
      <img className="banner__logo" src={bannerLogo} alt="" />
      <h1 className="banner__titulo">
        monitore os seus animes preferidos, e não perca mais nenhum episódio
      </h1>
      <a href="#sobre"><FontAwesomeIcon icon={faArrowDown} size="3x" style={{color: "orange"}} className="banner__scrollDown" /></a>
    </div>
    </section>)
}

export default Banner