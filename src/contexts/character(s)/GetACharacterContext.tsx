import axios from "axios";
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
      console.log("rodou context");
      api
        .get(`/characters/${characterId}`)
        .then(async (resp) => {
          const response = resp.data.data;
          const url = `https://southpark.fandom.com/api.php?action=query&origin=*&titles=${response.name}&prop=pageimages&format=json`;
          const res = await axios.get(url);
          const imageSource = Object.values(res.data.query.pages)[0]["thumbnail"]["source"].split("/revision");
          response.image = imageSource[0];
          setCharacterDetail(resp.data.data);
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
