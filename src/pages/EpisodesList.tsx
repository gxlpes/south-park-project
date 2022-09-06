import { GetACharacterContext } from "../contexts/GetACharacterContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetEpisodeContext } from "../contexts/GetEpisodeContext";

const Episodes = () => {
  const { characterDetail } = useContext(GetACharacterContext);
  const { setEpisodeId } = useContext(GetEpisodeContext);
  const navigate = useNavigate();

  const arrEpisodes = characterDetail.episodes;

  const EpisodeInfoHandler = (el: string) => {
    const id = el.split("/").pop();
    navigate(`/episode/${id}`);
    setEpisodeId(Number(id));
  };

  return (
    <>
      <ul>
        {arrEpisodes.map((el: string) => (
          <a onClick={() => EpisodeInfoHandler(el)}>
            <li>{el}</li>
          </a>
        ))}
      </ul>
    </>
  );
};

export default Episodes;
