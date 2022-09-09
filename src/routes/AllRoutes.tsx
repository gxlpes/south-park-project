import { Route, Routes } from "react-router-dom";
import { useContext } from "react";

import Home from "../pages/home/Home";
import CharacterInfo from "../pages/character(s)/CharacterInfo";
import EpisodeInfo from "../pages/episode(s)/EpisodeInfo";
import CharactersList from "../pages/character(s)/CharactersList";
import EpisodesList from "../pages/episode(s)/EpisodesList";
import CharactersLayout from "../pages/character(s)/CharactersLayout";
import EpisodesLayout from "../pages/episode(s)/EpisodesLayout";
import EpisodeListCharacters from "../pages/episode(s)/EpisodeListCharacters";
import CharacterListEpisodes from "../pages/character(s)/CharacterListEpisodes";
import Navbar from "../components/navbar/Navbar";

const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<EpisodesLayout />}>
          <Route index element={<EpisodesList />} />
          <Route path=":id" element={<EpisodesList />} />
        </Route>

        <Route path="/episode/:id" element={<EpisodeInfo />}>
          <Route path="characters" element={<EpisodeListCharacters />} />
        </Route>

        <Route path="/characters" element={<CharactersLayout />}>
          <Route index element={<CharactersList />} />
          <Route path=":id" element={<CharactersList />} />
        </Route>

        <Route path="/character/:id" element={<CharacterInfo />}>
          <Route path="episodes" element={<CharacterListEpisodes />} />
        </Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
