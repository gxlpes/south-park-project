import { createContext } from "react";
import api from "../services/api";
import { IGetAllEpisodes } from "../interfaces/contextInterfaces";
import { useEffect, useState } from "react";
import { EpisodeDataSchema } from "../interfaces/episodeInterfaces";
import { IChildren } from "../interfaces/reactInterfaces";
import { useNavigate } from "react-router-dom";

export const GetAllEpisodesContext = createContext<IGetAllEpisodes>({} as IGetAllEpisodes);

export const GetAllEpisodesContextProvider = ({ children }: IChildren) => {
  const navigate = useNavigate();
  const [episodesList, setEpisodesList] = useState<EpisodeDataSchema[]>([]);
  const [episodesPage, setEpisodesPage] = useState(1);
  useEffect(() => {
    api
      .get(`/episodes?page=${episodesPage}`)
      .then((res) => {
        setEpisodesList(res.data.data);
        console.log(res.data.data);
        return res;
      })
      .catch((err) => console.error(err));
  }, [episodesPage]);

  const nextEpisodesPage = () => {
    setEpisodesPage((prev) => prev + 1);
    navigate(`episodes/${episodesPage + 1}`);
  };

  const prevEpisodesPage = () => {
    setEpisodesPage((prev) => prev - 1);
    navigate(`episodes/${episodesPage - 1}`);
  };

  return (
    <GetAllEpisodesContext.Provider
      value={{ setEpisodesPage, episodesList, nextEpisodesPage, prevEpisodesPage, episodesPage }}
    >
      {children}
    </GetAllEpisodesContext.Provider>
  );
};
