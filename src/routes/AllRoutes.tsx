import Home from "../pages/Home";
import CharacterInfo from "../pages/CharacterInfo";
import { Route, Routes } from "react-router-dom";
import EpisodeInfo from "../pages/EpisodeInfo";
import CharactersList from "../pages/CharactersList";
import EpisodesListCharacter from "../pages/EpisodesListCharacter";
import EpisodesList from "../pages/EpisodesList";
import CharactersLayout from "../pages/CharactersLayout";
import EpisodesLayout from "../pages/EpisodesLayout";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/episodes" element={<EpisodesLayout />}>
        <Route index element={<EpisodesList />} />
        <Route path=":id" element={<EpisodesList />} />
      </Route>

      <Route path="/episode/:id" element={<EpisodeInfo />} />

      <Route path="/characters" element={<CharactersLayout />}>
        <Route index element={<CharactersList />} />
        <Route path=":id" element={<CharactersList />} />
      </Route>

      <Route path="/character/:id" element={<CharacterInfo />}>
        <Route path="episodes" element={<EpisodesListCharacter />} />
      </Route>

      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AllRoutes;
