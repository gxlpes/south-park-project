import { createContext, useEffect, useState } from "react";
import { CharacterSchema } from "../interfaces/characterInterfaces";
import { IGetACharacter } from "../interfaces/contextInterfaces";
import { IChildren } from "../interfaces/reactInterfaces";
import api from "../services/api";

export const GetACharacterContext = createContext<IGetACharacter>({} as IGetACharacter);

export const GetACharacterContextProvider = ({ children }: IChildren) => {
  const [characterDetail, setCharacterDetail] = useState<CharacterSchema[]>([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    api
      .get(`/characters/${id}`)
      .then((res) => {
        setCharacterDetail(res.data.data);
        console.log(res.data.data);
        return res;
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <GetACharacterContext.Provider value={{ setCharacterDetail, setId, characterDetail }}>
      {children}
    </GetACharacterContext.Provider>
  );
};
