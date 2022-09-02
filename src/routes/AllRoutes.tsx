import Home from "../pages/Home";
import CharacterInfo from "../pages/CharacterInfo";
import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { GetAllCharactersContext } from "../contexts/GetAllCharactersContext";

const AllRoutes = () => {
  const { page } = useContext(GetAllCharactersContext);

  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/p${page}`} />} />
      <Route path={`/p${page}`} element={<Home />} />
      <Route path="character-info">
        <Route path=":idCharacter" element={<CharacterInfo />} />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AllRoutes;
