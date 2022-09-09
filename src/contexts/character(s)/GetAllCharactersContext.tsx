import axios from "axios";
import { stringify } from "querystring";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CharacterSchema, PageSchema } from "../../interfaces/characterInterfaces";
import { IGetAllCharacters } from "../../interfaces/contextInterfaces";
import { IChildren } from "../../interfaces/reactInterfaces";
import api from "../../services/api";

export const GetAllCharactersContext = createContext<IGetAllCharacters>({} as IGetAllCharacters);

export const GetAllCharactersProvider = ({ children }: IChildren) => {
  let navigate = useNavigate();
  const [charactersList, setCharactersList] = useState<CharacterSchema[]>([]);
  const [charactersPage, setCharactersPage] = useState(1);

  interface imageSource {
    thumbail: string;
  }

  const storage = window.localStorage.getItem("pageAccess");

  useEffect(() => {
    api
      .get(`/characters?page=${charactersPage}`)
      .then(async (res) => {
        await Promise.all(
          res.data.data.map(async (element: any) => {
            const url = `https://southpark.fandom.com/api.php?action=query&origin=*&titles=${element.name}&prop=pageimages&format=json`;
            const res = await axios.get(url);
            const imageSource = Object.values(res.data.query.pages)[0]["thumbnail"]["source"].split("/revision");
            element.image = imageSource[0];
            console.log(element);
          })
        );
        setCharactersList(res.data.data);
        window.localStorage.setItem("pageAccess", `${charactersPage}`);
      })
      .catch((err) => console.error(err));
  }, [storage, charactersPage]);

  const nextCharactersPage = () => {
    setCharactersPage((prev) => prev + 1);
    navigate(`characters/${charactersPage + 1}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevCharactersPage = () => {
    setCharactersPage((prev) => prev - 1);
    navigate(`characters/${charactersPage - 1}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <GetAllCharactersContext.Provider
      value={{ charactersList, charactersPage, nextCharactersPage, prevCharactersPage, setCharactersPage }}
    >
      {children}
    </GetAllCharactersContext.Provider>
  );
};
