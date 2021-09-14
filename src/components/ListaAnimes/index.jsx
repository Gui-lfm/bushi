import React from "react";
import "../../assets/lista-animes-style/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faInfinity } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useGetAnimeQuery } from "../animesSelecionados/animeSlice";
import Spinner from "../Spinner";


function ListaAnimes() {
  const { data, isLoading, isError, isSuccess, error } = useGetAnimeQuery();

  let content;

  if (isLoading) {
    content = <Spinner />;
  } else if (isError) {
    content = (
      <section className="erro">
        <p className="erro__titulo">
          O conteúdo da página não pode ser carregado, tente novamente em alguns
          minutos
        </p>
        <p className="erro__codigo">
          código do erro: {error.status.toString()}
        </p>
      </section>
    );
  } else if (isSuccess) {
    let animes = data.data.allAnimes;

    content = animes.map((anime) => {
      return (
        <Link
          className="anime-listado__link"
          to={`/anime/${anime.id}`}
          key={anime.id}
        >
          <div className="anime-listado">
            <div className="anime-listado__portrait">
              <img
                src={anime.imageUrl}
                alt=""
                className="anime-listado__imagem"
              />
            </div>

            <h3 className="anime-listado__titulo">Nome: {anime.title}</h3>

            <ul className="anime-listado__infos">
              <li>episódios: {anime.episodes}</li>
              <li>estrelas: {anime.rating}</li>
            </ul>

            <FontAwesomeIcon icon={faCaretRight} size="2x" />
          </div>
        </Link>
      );
    });
  }

  return (
    <section className="lista-animes">
      <div className="lista-animes__titulo">
        <FontAwesomeIcon
          icon={faInfinity}
          style={{ color: "#FE9800" }}
          size="2x"
        />
        <h2 className="lista-animes__texto">Veja animes</h2>
      </div>
      {content}
    </section>
  );
}

export default ListaAnimes;
