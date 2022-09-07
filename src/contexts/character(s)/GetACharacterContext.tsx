import { createContext, useEffect, useState } from "react";
import { CharacterSchema } from "../../interfaces/characterInterfaces";
import { IGetACharacter } from "../../interfaces/contextInterfaces";
import { IChildren } from "../../interfaces/reactInterfaces";
import api from "../../services/api";

export const GetACharacterContext = createContext<IGetACharacter>({} as IGetACharacter);

export const GetACharacterContextProvider = ({ children }: IChildren) => {
  const [characterDetail, setCharacterDetail] = useState<CharacterSchema[]>([]);
  const [characterId, setCharacterId] = useState(0);

  useEffect(() => {
    if (characterId > 0) {
      api
        .get(`/characters/${characterId}`)
        .then((res) => {
          setCharacterDetail(res.data.data);
          console.log(res.data.data);
          return res;
        })
        .catch((err) => console.error(err));
    }
  }, [characterId]);

  return (
    <GetACharacterContext.Provider value={{ setCharacterDetail, setCharacterId, characterDetail }}>
      {children}
    </GetACharacterContext.Provider>
  );
};
