import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CharacterSchema, PageSchema } from "../interfaces/characterInterfaces";
import { IGetAllCharacters } from "../interfaces/contextInterfaces";
import { IChildren } from "../interfaces/reactInterfaces";
import api from "../services/api";

export const GetAllCharactersContext = createContext<IGetAllCharacters>({} as IGetAllCharacters);

export const GetAllCharactersProvider = ({ children }: IChildren) => {
  let navigate = useNavigate();
  const [charactersList, setCharactersList] = useState<CharacterSchema[]>([]);
  const [charactersPage, setCharactersPage] = useState(() => {
    if (window.localStorage.getItem("pageAccess")) {
      return Number(window.localStorage.getItem("pageAccess"));
    } else {
      return 1;
    }
  });

  const storage = window.localStorage.getItem("pageAccess");
  let arrChar: string[] = [];
  useEffect(() => {
    api
      .get(`/characters?page=${charactersPage}`)
      .then((res) => {
        setCharactersList(res.data.data);
        console.log(res.data.data);
        window.localStorage.setItem("pageAccess", `${charactersPage}`);
        return res;
      })
      .catch((err) => console.error(err));
  }, [storage, charactersPage]);

  const nextCharactersPage = () => {
    setCharactersPage((prev) => prev + 1);
    navigate(`characters/${charactersPage + 1}`);
  };

  const prevCharactersPage = () => {
    setCharactersPage((prev) => prev - 1);
    navigate(`characters/${charactersPage - 1}`);
  };

  return (
    <GetAllCharactersContext.Provider
      value={{ charactersList, charactersPage, nextCharactersPage, prevCharactersPage, setCharactersPage }}
    >
      {children}
    </GetAllCharactersContext.Provider>
  );
};
