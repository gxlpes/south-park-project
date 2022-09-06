import Home from "../pages/Home";
import CharacterInfo from "../pages/CharacterInfo";
import { Route, Routes, Navigate } from "react-router-dom";
import EpisodesList from "../pages/EpisodesList";
import EpisodeInfo from "../pages/EpisodeInfo";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/1" />} />
      <Route path="/:p" element={<Home />} />
      <Route path="/character">
        <Route path=":id" element={<CharacterInfo />}>
          <Route path="/character/:id/episodes" element={<EpisodesList />} />
        </Route>
      </Route>
      <Route path="/episode/:id" element={<EpisodeInfo />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AllRoutes;
