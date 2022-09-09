import { useNavigate } from "react-router-dom";
import { GetAllEpisodesContext } from "../../../contexts/episode(s)/GetAllEpisodesContext";
import { useContext } from "react";

const EpisodesList: any = () => {
  const { episodesList } = useContext(GetAllEpisodesContext);
  const navigate = useNavigate();

  return episodesList.map((el) => (
    <>
      <p>
        {el.name} <button onClick={() => navigate(`/episode/${el.id}`)}>Info</button>
      </p>
    </>
  ));
};

export default EpisodesList;
