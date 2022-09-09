import { useContext, useEffect } from "react";
import { useParams, Link, useNavigate, Outlet } from "react-router-dom";
import { GetACharacterContext } from "../../../contexts/character(s)/GetACharacterContext";

const CharacterInfo = () => {
  const { characterDetail, setCharacterId } = useContext(GetACharacterContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setCharacterId(Number(id));
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
