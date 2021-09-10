import React from "react";
import { useParams } from "react-router";
import "../../assets/anime-style/style.css";
import {useGetAnimeQuery} from '../animesSelecionados/animeSlice'
import Spinner from "../Spinner";

function Anime() {
  const {id}  = useParams();

  const {isLoading, isError, data} = useGetAnimeQuery()

  if(isLoading){

    return <Spinner/>
  }else if(isError){

    return <div>ops, deu ruim</div>
  }

  let animes = data.data.allAnimes
  
  return (
    <>
      {animes
        .filter(anime => anime.id === id)
        .map((anime) => ( 
          <div key={anime.id}>
            <section className="anime">
             <img src={anime.imageUrl} alt="" className="anime__imagem" />
              <div className="anime__detalhes">
                <h1 className="anime__titulo">Nome do anime: {anime.title} </h1>
                <p className="anime__sinopse">{anime.synopsis}</p>
              </div>
            </section>
            <div className="infos-extras">
              <h2 className="infos-extras__titulo">Outras Informações</h2>
              <ul className="infos-extras__lista">
                <li className="infos-extras__lista-item">
                  Gênero:{anime.genres}
                </li>
                <li className="infos-extras__lista-item">
                  Ano de lançamento:{anime.releaseYear}
                </li>
                <li className="infos-extras__lista-item">
                  Autor(a) da obra:{anime.animeCreator}
                </li>
                <li className="infos-extras__lista-item">
                  Origem da obra:{anime.source}
                </li>
                <li className="infos-extras__lista-item">
                  Estúdio responsável pela animação:{anime.animationStudio}
                </li>
                <li className="infos-extras__lista-item">
                  Status da exibição:{anime.animeStatus}
                </li>
              </ul>
            </div>
          </div>
        ))}
    </>
  );
}
export default Anime;
