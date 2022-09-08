import { createContext } from "react";
import api from "../services/api";
import { useEffect, useState } from "react";
import { IChildren } from "../interfaces/reactInterfaces";
import { IFindSomething } from "../interfaces/contextInterfaces";

export const FindSomethingContext = createContext<IFindSomething>({} as IFindSomething);

export const FindSomethingContextProvider = ({ children }: IChildren) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    api
      .get(`/${searchCategory}?search=${searchTerm}`)
      .then((res) => {
        setSearchResult(res.data.data);
        console.log(res.data.data);
        return res;
      })
      .catch((err) => console.error(err));
  }, [searchTerm]);

  return (
    <FindSomethingContext.Provider value={{ setSearchTerm, searchTerm, setSearchCategory, searchCategory, searchResult }}>
      {children}
    </FindSomethingContext.Provider>
  );
};
