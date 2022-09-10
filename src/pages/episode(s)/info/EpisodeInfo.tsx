import { useParams, Link, Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GetAEpisodeContext } from "../../../contexts/episode(s)/GetAEpisodeContext";
import { Item } from "../../../styles/ui/Info";
import { GetAllEpisodesContext } from "../../../contexts/episode(s)/GetAllEpisodesContext";

const EpisodeInfo = () => {
  const { episodesList } = useContext(GetAllEpisodesContext);
  const { episodeDetail, setEpisodeId } = useContext(GetAEpisodeContext);
  const { id } = useParams();
  const arrIndex = Number(id) - 1;
  const e = episodesList[arrIndex];

  useEffect(() => {
    if (e === undefined) {
      console.log("setou");
      setEpisodeId(Number(id));
    }
  }, [id]);

  if (episodesList[arrIndex] !== undefined) {
    return (
      <>
        <Item>
          <img src={e.thumbnail_url} />
          <p>{e?.name}</p>
          <p>{e?.air_date}</p>
          <p>
            E{e?.episode}S{e?.season}
          </p>
          <p>{e?.description}</p>
          <Link to={`characters`}>Characters ▼</Link>
        </Item>
        <Outlet />
      </>
    );
  } else {
    return (
      <>
        <Item>
          <img className="big-image" src={episodeDetail?.thumbnail_url} />
          <div className="info">
            <p>
              <b>Name:</b>
              {episodeDetail?.name}
            </p>
            <p>
              <b>Air date:</b>
              {episodeDetail?.air_date}
            </p>
            <p>
              E{episodeDetail?.episode}S{episodeDetail?.season}
            </p>
            <p>{episodeDetail?.description}</p>
          </div>

          <Link to={`characters`}>Characters ▼</Link>
        </Item>

        <Outlet />
      </>
    );
  }
};

export default EpisodeInfo;
