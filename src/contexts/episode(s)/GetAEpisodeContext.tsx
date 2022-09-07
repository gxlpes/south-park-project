import { createContext, useEffect, useState } from "react";
import { IChildren } from "../../interfaces/reactInterfaces";
import { IGetAEpisode } from "../../interfaces/contextInterfaces";
import api from "../../services/api";
import { EpisodeDataSchema } from "../../interfaces/episodeInterfaces";

export const GetAEpisodeContext = createContext<IGetAEpisode>({} as IGetAEpisode);

export const GetAEpisodeContextProvider = ({ children }: IChildren) => {
  const [episodeDetail, setEpisodeDetail] = useState<EpisodeDataSchema>();
  const [episodeId, setEpisodeId] = useState(0);

  useEffect(() => {
    api
      .get(`/episodes/${episodeId}`)
      .then((res) => {
        setEpisodeDetail(res.data.data);
        console.log(res.data.data);
        return res;
      })
      .catch((err) => console.error(err));
  }, [episodeId]);

  return <GetAEpisodeContext.Provider value={{ setEpisodeId, episodeDetail }}>{children}</GetAEpisodeContext.Provider>;
};
