import { useContext, useEffect } from "react";
import { useParams, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { GetACharacterContext } from "../contexts/GetACharacterContext";
import EpisodesListCharacter from "./EpisodesListCharacter";
import EpisodesList from "./EpisodesListCharacter";

const CharacterInfo = () => {
  const { characterDetail, setId } = useContext(GetACharacterContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setId(Number(id));
  }, [id]);

  return (
    <>
      <button onClick={() => navigate("/")}>Home</button>
      <p>{characterDetail.id}</p>
      <p>{characterDetail.name}</p>
      <p>{characterDetail.age ? characterDetail.age : "No data"}</p>
      <p>{characterDetail.occupation}</p>
      <Link to={`episodes`}>Episodes</Link>
      <Outlet />
    </>
  );
};

export default CharacterInfo;
