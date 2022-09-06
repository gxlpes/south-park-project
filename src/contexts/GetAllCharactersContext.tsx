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
  const [page, setPage] = useState(() => {
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
      .get(`/characters?page=${page}`)
      .then((res) => {
        setCharactersList(res.data.data);
        console.log(res.data.data);
        window.localStorage.setItem("pageAccess", `${page}`);
        return res;
      })
      .catch((err) => console.error(err));
  }, [storage, page]);

  const nextPage = () => {
    setPage((prev) => prev + 1);
    navigate(`/${page + 1}`);
  };

  const prevPage = () => {
    setPage((prev) => prev - 1);
    navigate(`/${page - 1}`);
  };

  return (
    <GetAllCharactersContext.Provider value={{ charactersList, page, nextPage, prevPage, setPage }}>
      {children}
    </GetAllCharactersContext.Provider>
  );
};
