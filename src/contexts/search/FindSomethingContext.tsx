import { createContext, useContext } from "react";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { IChildren } from "../../interfaces/reactInterfaces";
import { IFindSomething } from "../../interfaces/contextInterfaces";
import { GetAllEpisodesContext } from "../episode(s)/GetAllEpisodesContext";

export const FindSomethingContext = createContext<IFindSomething>({} as IFindSomething);

export const FindSomethingContextProvider = ({ children }: IChildren) => {
  const { setEpisodesList } = useContext(GetAllEpisodesContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  useEffect(() => {
    api
      .get(`/episodes?search=${searchTerm}`)
      .then(async (res) => {
        console.log(res.data.data);
        setEpisodesList(res.data.data);
        res.data.data.map((el) => {
          const image = el.thumbnail_url.split("/revision");
          const fixedImage = image[0];
          el.thumbnail_url = fixedImage;
        });
      })
      .catch((err) => console.error(err));
  }, [searchTerm]);

  return (
    <FindSomethingContext.Provider value={{ setSearchTerm, searchTerm, setSearchCategory, searchCategory, setEpisodesList }}>
      {children}
    </FindSomethingContext.Provider>
  );
};
