import { createContext, useEffect, useState } from "react";
import { IChildren } from "../interfaces/reactInterfaces";
import { IGetAEpisode } from "../interfaces/contextInterfaces";
import api from "../services/api";
import { EpisodeDataSchema } from "../interfaces/episodeInterfaces";

export const GetEpisodeContext = createContext<IGetAEpisode>({} as IGetAEpisode);

export const GetEpisodeContextProvider = ({ children }: IChildren) => {
  const [episodeData, setEpisodeData] = useState<EpisodeDataSchema>();
  const [episodeId, setEpisodeId] = useState(0);

  useEffect(() => {
    api
      .get(`/episodes/${episodeId}`)
      .then((res) => {
        setEpisodeData(res.data.data);
        console.log(res.data.data);
        return res;
      })
      .catch((err) => console.error(err));
  }, [episodeId]);

  return <GetEpisodeContext.Provider value={{ setEpisodeId, episodeData }}>{children}</GetEpisodeContext.Provider>;
};
