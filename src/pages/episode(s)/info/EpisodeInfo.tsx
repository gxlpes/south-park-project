import { useNavigate, useParams, Link, Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GetAEpisodeContext } from "../../../contexts/episode(s)/GetAEpisodeContext";

const EpisodeInfo = () => {
  const navigate = useNavigate();
  const { episodeDetail, setEpisodeId } = useContext(GetAEpisodeContext);
  const { id } = useParams();

  useEffect(() => {
    setEpisodeId(Number(id));
  }, [id]);
  console.log(episodeDetail);
  return (
    <>
      <button onClick={() => navigate("/")}>Home</button>
      <h1>Episode Info</h1>
      <p>{episodeDetail?.name}</p>
      <Link to={`characters`}>Characters</Link>
      <Outlet />
    </>
  );
};

export default EpisodeInfo;
