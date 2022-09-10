import { GetACharacterContext } from "../../../contexts/character(s)/GetACharacterContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GetAEpisodeContext } from "../../../contexts/episode(s)/GetAEpisodeContext";
import { List, ListItem } from "../../../styles/ui/SecondList";

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
      <List>
        {arrEpisodes.map((el: string) => (
          <a key={el} onClick={() => EpisodeInfoHandler(el)}>
            <ListItem>Episode {el.split("/").pop()}</ListItem>
          </a>
        ))}
      </List>
    </>
  );
};

export default CharacterListEpisodes;
