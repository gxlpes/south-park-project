import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GetEpisodeContext } from "../contexts/GetEpisodeContext";

const EpisodeInfo = () => {
  const navigate = useNavigate();
  const { episodeData } = useContext(GetEpisodeContext);
  console.log(episodeData);
  return (
    <>
      <button onClick={() => navigate("/")}>Home</button>
      <h1>Episode Info</h1>
      <p>{episodeData?.name}</p>
    </>
  );
};

export default EpisodeInfo;
