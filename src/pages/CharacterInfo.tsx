import { useContext, useEffect } from "react";
import { useParams, Routes, Route, Link, useNavigate } from "react-router-dom";
import { GetACharacterContext } from "../contexts/GetACharacterContext";
import Episodes from "./Episodes";

const CharacterInfo = () => {
  const { characterDetail, setId } = useContext(GetACharacterContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setId(Number(id));
  }, [id]);

  return (
    <>
      <button onClick={() => navigate("/1")}>Home</button>
      <p>{characterDetail.id}</p>
      <p>{characterDetail.name}</p>
      <p>{characterDetail.age ? characterDetail.age : "No data"}</p>
      <p>{characterDetail.occupation}</p>
      <Link to={`/info/${id}/episodes`}>Episodes</Link>
      <Routes>
        <Route path={`/episodes`} element={<Episodes />} />
      </Routes>
    </>
  );
};

export default CharacterInfo;
