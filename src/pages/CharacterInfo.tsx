import { useContext, useEffect } from "react";
import { useParams, Routes, Route, Link } from "react-router-dom";
import { GetACharacterContext } from "../contexts/GetACharacterContext";

const CharacterInfo = () => {
  const { characterDetail, setId } = useContext(GetACharacterContext);
  const { id } = useParams();

  useEffect(() => {
    setId(Number(id));
  }, [id]);

  return (
    <>
      <p>{characterDetail.id}</p>
      <p>{characterDetail.name}</p>
      <p>{characterDetail.age ? characterDetail.age : "No data"}</p>
      <p>{characterDetail.occupation}</p>
      <Link to={`/info/${characterDetail.id}/episodes`}>Episodes</Link>
      <Routes>
        <Route path="/episodes">Episodes</Route>
      </Routes>
    </>
  );
};

export default CharacterInfo;
