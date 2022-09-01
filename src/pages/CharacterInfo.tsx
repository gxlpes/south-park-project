import React, { useEffect } from "react";
import AllDataCharacter from "./AllDataCharacter"
import { FindACaracterContext } from "../contexts/FindCaracterContext";


const CharacterInfo = () => {
  let { characterId } = useParams();
  const { setCharacterID, character } = useContext(FindCharacterContext);

  useEffect(() => {
    setCharacterID(Number(characterId));
  }, [characterId, setCharacterID]);

  return (
    {character && (
        <AllDataCharacter character={character} />
    )}
  )
};

export default CharacterInfo;
