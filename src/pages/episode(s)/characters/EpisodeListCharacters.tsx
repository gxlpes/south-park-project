import { GetACharacterContext } from "../../../contexts/character(s)/GetACharacterContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetAEpisodeContext } from "../../../contexts/episode(s)/GetAEpisodeContext";

const EpisodesListCharacter = () => {
  const { episodeDetail } = useContext(GetAEpisodeContext);
  const { setCharacterId } = useContext(GetACharacterContext);
  const navigate = useNavigate();

  const arrCharacters = episodeDetail?.characters;

  const EpisodeInfoHandler = (el: string) => {
    const id = el.split("/").pop();
    navigate(`/character/${id}`);
    setCharacterId(Number(id));
  };

  return (
    <>
      <ul>
        {arrCharacters?.map((el: string) => (
          <a key={el} onClick={() => EpisodeInfoHandler(el)}>
            <li>{el}</li>
          </a>
        ))}
      </ul>
    </>
  );
};

export default EpisodesListCharacter;
