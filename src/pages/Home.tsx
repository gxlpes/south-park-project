import { useContext, useEffect } from "react";
import { GetAllCharactersContext } from "../contexts/GetAllCharactersContext";
import { useNavigate, useParams } from "react-router-dom";
import CharactersList from "./CharactersList";

const Home = () => {
  const navigate = useNavigate();
  const { charactersList, nextPage, prevPage, page, setPage } = useContext(GetAllCharactersContext);
  const { p } = useParams();
  console.log(p);

  if (page != Number(p)) {
    setPage(Number(p));
  }

  return (
    <>
      <button onClick={() => navigate("/p1")}>Home</button>
      <CharactersList charactersList={charactersList} />
      {page > 1 && <button onClick={prevPage}>Prev</button>}
      <button onClick={nextPage}>Next</button>
    </>
  );
};

export default Home;
