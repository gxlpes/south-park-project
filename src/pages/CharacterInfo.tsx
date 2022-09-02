import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetAllCharactersContext } from "../contexts/GetAllCharactersContext";

const CharacterInfo = () => {
  const { charactersList, nextPage, prevPage, page } = useContext(GetAllCharactersContext);

  return (
    <>
      {charactersList.map((el) => {
        <>
          <ul>
            <li>{el.name}</li>
            <li>{el.age}</li>
            <li>{el.occupation}</li>
            <li>{el.episodes} episodes</li>
            <li>{el.family}</li>
          </ul>
          <button>Episodes</button>
        </>;
      })}
    </>
  );
};

export default CharacterInfo;
