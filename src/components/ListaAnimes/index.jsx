import React from "react";
import "../../assets/lista-animes-style/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faInfinity } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {useGetAnimeQuery} from '../animesSelecionados/animeSlice'
import Spinner from "../Spinner";

function ListaAnimes() {
  const {data, isLoading, isError} = useGetAnimeQuery()
  
  if(isLoading){

    return <Spinner/>
  }else if(isError){

    return <div>Ops, deu ruim</div>
  }

  let animes = data.data.allAnimes

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

      {animes.map((anime) => {
        return (
          <div className="anime-listado" key={anime.id}>
            <div className="anime-listado__portrait">
              <img
                src={anime.imageUrl}
                alt=""
                className="anime-listado__imagem"
              />
            </div>
            <Link className="anime-listado__link" to={`/anime/${anime.id}`}>
              <h3 className="anime-listado__titulo">Nome: {anime.title}</h3>
            </Link>
            <ul className="anime-listado__infos">
              <li>episódios: {anime.episodes}</li>
              <li>estrelas: {anime.rating}</li>
            </ul>

            <FontAwesomeIcon icon={faCaretRight} size="2x" />
          </div>
        );
      })}
    </section>
  );
}

export default ListaAnimes;
