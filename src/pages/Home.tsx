import { useContext } from "react";
import { GetAllCharactersContext } from "../contexts/GetAllCharactersContext";

const Home = () => {
  const { charactersList, nextPage } = useContext(GetAllCharactersContext);
  console.log(charactersList);

  return (
    <>
      {charactersList.map((el) => (
        <p>{el.name}</p>
      ))}
      <button onClick={nextPage}>Next</button>
    </>
  );
};

export default Home;
