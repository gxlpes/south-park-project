import { GetACharacterContext } from "../../../contexts/character(s)/GetACharacterContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetAEpisodeContext } from "../../../contexts/episode(s)/GetAEpisodeContext";
import { List, ListItem } from "../../../styles/ui/SecondList";

const CharacterListEpisodes = () => {
  const { characterDetail } = useContext(GetACharacterContext);
  const { setEpisodeId } = useContext(GetAEpisodeContext);
  const navigate = useNavigate();
  console.log(characterDetail);

  const EpisodeInfoHandler = (el: string) => {
    const id = el.split("/").pop();
    navigate(`/episode/${id}`);
    setEpisodeId(Number(id));
  };

  return (
    <>
      <List>
        {characterDetail.episodes.map((el: string) => (
          <a key={el} onClick={() => EpisodeInfoHandler(el)}>
            <ListItem>Episode {el.split("/").pop()}</ListItem>
          </a>
        ))}
      </List>
    </>
  );
};

export default CharacterListEpisodes;
