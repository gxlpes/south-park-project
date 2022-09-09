import { GetACharacterContext } from "../../../contexts/character(s)/GetACharacterContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GetAEpisodeContext } from "../../../contexts/episode(s)/GetAEpisodeContext";
import { LinkEpisodeItem, ListEpisodes } from "./Styles";

const CharacterListEpisodes = () => {
  const { characterDetail } = useContext(GetACharacterContext);
  const { setEpisodeId } = useContext(GetAEpisodeContext);
  const navigate = useNavigate();

  const arrEpisodes = characterDetail.episodes;

  const EpisodeInfoHandler = (el: string) => {
    const id = el.split("/").pop();
    navigate(`/episode/${id}`);
    setEpisodeId(Number(id));
  };

  return (
    <>
      <ListEpisodes>
        {arrEpisodes.map((el: string) => (
          <a key={el} onClick={() => EpisodeInfoHandler(el)}>
            <LinkEpisodeItem>Episode {el.split("/").pop()}</LinkEpisodeItem>
          </a>
        ))}
      </ListEpisodes>
    </>
  );
};

export default CharacterListEpisodes;
