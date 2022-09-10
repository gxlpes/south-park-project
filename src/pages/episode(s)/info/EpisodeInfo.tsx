import { useNavigate, useParams, Link, Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GetAEpisodeContext } from "../../../contexts/episode(s)/GetAEpisodeContext";
import { Item } from "../../../styles/ui/Info";
import { GetAllEpisodesContext } from "../../../contexts/episode(s)/GetAllEpisodesContext";

const EpisodeInfo = () => {
  const navigate = useNavigate();
  const { episodeDetail, setEpisodeId } = useContext(GetAEpisodeContext);
  const { id } = useParams();
  const { episodesList } = useContext(GetAllEpisodesContext);
  console.log(episodesList[0]);
  const fixId = Number(id) - 1;

  useEffect(() => {
    setEpisodeId(Number(id));
  }, [id]);
  console.log(episodeDetail);
  return (
    <>
      <Item>
        <p>{episodeDetail?.name}</p>
        <p>{episodeDetail?.air_date}</p>
        <p>
          E{episodeDetail?.episode}S{episodeDetail?.season}
        </p>
        <p>{episodeDetail?.description}</p>
        <Link to={`characters`}>Characters ▼</Link>
      </Item>

      <Outlet />
    </>
  );
};

export default EpisodeInfo;
