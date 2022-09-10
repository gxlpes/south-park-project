import { GetACharacterContext } from "../../../contexts/character(s)/GetACharacterContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetAEpisodeContext } from "../../../contexts/episode(s)/GetAEpisodeContext";
import { List, ListItem } from "../../../styles/ui/SecondList";

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
      <List>
        {arrCharacters?.map((el: string) => (
          <a key={el} onClick={() => EpisodeInfoHandler(el)}>
            <ListItem>Character {el.split("/").pop()}</ListItem>
          </a>
        ))}
      </List>
    </>
  );
};

export default EpisodesListCharacter;
