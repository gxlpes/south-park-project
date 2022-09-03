import Home from "../pages/Home";
import CharacterInfo from "../pages/CharacterInfo";
import { Route, Routes, Navigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { GetAllCharactersContext } from "../contexts/GetAllCharactersContext";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/1" />} />
      <Route path="/:p" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AllRoutes;
