import { createContext } from "react";
import api from "../../services/api";
import { IGetAllEpisodes } from "../../interfaces/contextInterfaces";
import { useEffect, useState } from "react";
import { EpisodeDataSchema } from "../../interfaces/episodeInterfaces";
import { IChildren } from "../../interfaces/reactInterfaces";
import { useNavigate } from "react-router-dom";

export const GetAllEpisodesContext = createContext<IGetAllEpisodes>({} as IGetAllEpisodes);

export const GetAllEpisodesContextProvider = ({ children }: IChildren) => {
  const navigate = useNavigate();
  const [episodesList, setEpisodesList] = useState<EpisodeDataSchema[]>([]);
  const [episodesPage, setEpisodesPage] = useState(() => {
    if (window.localStorage.getItem("pageAccess")) {
      return Number(window.localStorage.getItem("pageAccess"));
    } else {
      return 1;
    }
  });

  useEffect(() => {
    api
      .get(`/episodes?page=${episodesPage}`)
      .then(async (res) => {
        setEpisodesList(res.data.data);
        res.data.data.map((el) => {
          const image = el.thumbnail_url.split("/revision");
          const fixedImage = image[0];
          el.thumbnail_url = fixedImage;
        });
        return res;
      })
      .catch((err) => console.error(err));
  }, [episodesPage]);

  const nextEpisodesPage = () => {
    setEpisodesPage((prev) => prev + 1);
    navigate(`episodes/${episodesPage + 1}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevEpisodesPage = () => {
    setEpisodesPage((prev) => prev - 1);
    navigate(`episodes/${episodesPage - 1}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <GetAllEpisodesContext.Provider
      value={{ setEpisodesPage, episodesList, nextEpisodesPage, prevEpisodesPage, episodesPage }}
    >
      {children}
    </GetAllEpisodesContext.Provider>
  );
};
