import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CharacterSchema, PageSchema } from "../interfaces/characterInterfaces";
import { IGetAllCharacters } from "../interfaces/contextInterfaces";
import { IChildren } from "../interfaces/reactInterfaces";
import api from "../services/api";

export const GetAllCharactersContext = createContext<IGetAllCharacters>({} as IGetAllCharacters);

export const GetAllCharactersInfo = ({ children }: IChildren) => {
  const [charactersList, setCharactersList] = useState<CharacterSchema[]>([]);
  const [page, setPage] = useState(() => {
    if (window.localStorage.getItem("pageAcess")) {
      return Number(window.localStorage.getItem("pageAcess"));
    } else {
      return 1;
    }
  });
  let navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/characters?page=${page}`)
      .then((res) => {
        setCharactersList(res.data.data);
        window.localStorage.setItem("pageAcess", `${page}`);
        return res;
      })
      .catch((err) => console.error(err));
  }, [page]);

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
