import { useNavigate } from "react-router-dom";
import { GetAllEpisodesContext } from "../contexts/GetAllEpisodesContext";
import { useContext } from "react";

const EpisodesList: any = () => {
  const { episodesList } = useContext(GetAllEpisodesContext);

  return episodesList.map((el) => (
    <>
      <p>{el.name}</p>
    </>
  ));
};

export default EpisodesList;
