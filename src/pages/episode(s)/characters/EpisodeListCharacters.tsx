import { GetACharacterContext } from "../../../contexts/character(s)/GetACharacterContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetAEpisodeContext } from "../../../contexts/episode(s)/GetAEpisodeContext";
import { LinkCharacterItem, ListCharacters } from "./Styles";

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
      <ListCharacters>
        {arrCharacters?.map((el: string) => (
          <a key={el} onClick={() => EpisodeInfoHandler(el)}>
            <LinkCharacterItem>Character {el.split("/").pop()}</LinkCharacterItem>
          </a>
        ))}
      </ListCharacters>
    </>
  );
};

export default EpisodesListCharacter;
