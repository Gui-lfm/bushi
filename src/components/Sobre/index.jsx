import React from "react";
import "../../assets/sobre-style/style.css";
import {
  faFire,
  faInfinity,
  faDragon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sobre() {
  return (
    <section className="sobre">
      <h2 className="sobre__titulo" id="sobre">O que fazer por aqui?</h2>

      <section className="sobre__informacoes">
        <div className="sobre__informacao">
          <FontAwesomeIcon
            icon={faFire}
            style={{ color: "#C64750" }}
            size="5x"
          />
          <h3 className="informacao__titulo">Os Melhores</h3>
          <p className="informacao__descricao">
            Veja o que esta pegando fogo no mundo dos animes. Os animes mais bem
            avaliados pela galera!
          </p>
        </div>
        <div className="sobre__informacao">
          <FontAwesomeIcon
            icon={faInfinity}
            style={{ color: "#FE9800" }}
            size="5x"
          />
          <h3 className="informacao__titulo">Informações</h3>
          <p className="informacao__descricao">
            Procure informações dos seus animes preferidos.
          </p>
        </div>
        <div className="sobre__informacao">
          <FontAwesomeIcon
            icon={faDragon}
            style={{ color: "black" }}
            size="5x"
          />
          <h3 className="informacao__titulo">Sua Lista</h3>
          <p className="informacao__descricao">
            Comece agora mesmo a montar sua lista de animes preferidos, e seja
            notificado quando um episódio novo for ao ar!
          </p>
        </div>

      </section>
    </section>
  );
}

export default Sobre;
