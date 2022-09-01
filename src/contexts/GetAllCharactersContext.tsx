import { createContext, useEffect, useState } from "react";
import { CharacterSchema } from "../interfaces/characterInterfaces";
import { IGetAllCharacters } from "../interfaces/contextInterfaces";
import { IChildren } from "../interfaces/reactInterfaces";
import api from "../services/api";

export const GetAllCharactersContext = createContext<IGetAllCharacters>({} as IGetAllCharacters);

export const GetAllCharactersProvider = ({ children }: IChildren) => {
  const [charactersList, setCharactersList] = useState<CharacterSchema[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    api
      .get("/characters")
      .then((res) => {
        setCharactersList(res.data);
        console.log(res.data);
        return res;
      })
      .catch((err) => console.error(err));
  }, [page]);

  return <GetAllCharactersContext.Provider value={{ charactersList }}>{children}</GetAllCharactersContext.Provider>;
};
