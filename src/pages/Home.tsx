import { useContext } from "react";
import { GetAllCharactersContext } from "../contexts/GetAllCharactersContext";

const Home = () => {
  const { charactersList } = useContext(GetAllCharactersContext);
  console.log(charactersList);

  return (
    <>
      <p>Hi</p>
      {charactersList.map((el) => (
        <p>{el.name}</p>
      ))}
    </>
  );
};

export default Home;
