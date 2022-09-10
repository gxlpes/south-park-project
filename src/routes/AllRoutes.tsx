import { Route, Routes } from "react-router-dom";

import Home from "../pages/home/Home";
import CharacterInfo from "../pages/character(s)/info/CharacterInfo";
import EpisodeInfo from "../pages/episode(s)/info/EpisodeInfo";
import CharactersList from "../pages/character(s)/list/CharactersList";
import EpisodesList from "../pages/episode(s)/list/EpisodesList";
import CharactersLayout from "../pages/character(s)/layout/CharactersLayout";
import EpisodesLayout from "../pages/episode(s)/layout/EpisodesLayout";
import EpisodeListCharacters from "../pages/episode(s)/characters/EpisodeListCharacters";
import CharacterListEpisodes from "../pages/character(s)/episodes/CharacterListEpisodes";
import Navbar from "../components/navbar/Navbar";
import Error from "../pages/error/Error";
import { Content } from "../styles/Content";
import Footer from "../components/footer/Footer";
import SearchInput from "../components/searchInput/SearchInput";

const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Content>
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

          <Route path="*" element={<Error />} />
        </Routes>
      </Content>
      <Footer />
    </>
  );
};

export default AllRoutes;
