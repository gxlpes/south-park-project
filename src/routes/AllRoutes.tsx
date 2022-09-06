import Home from "../pages/Home";
import CharacterInfo from "../pages/CharacterInfo";
import { Route, Routes, Navigate } from "react-router-dom";
import Episodes from "../pages/Episodes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/1" />} />
      <Route path="/info">
        <Route path="/info/:id" element={<CharacterInfo />}>
          <Route path="/info/:id/episodes" element={<Episodes />} />
        </Route>
      </Route>
      <Route path="/:p" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AllRoutes;
