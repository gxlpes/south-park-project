import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GetEpisodeContext } from "../contexts/GetEpisodeContext";

const EpisodeInfo = () => {
  const navigate = useNavigate();
  const { episodeData } = useContext(GetEpisodeContext);
  console.log(episodeData);
  return (
    <>
      <button onClick={() => navigate("/1")}>Home</button>
      <p>Hahah</p>
      <p>{episodeData.name}</p>
    </>
  );
};

export default EpisodeInfo;
