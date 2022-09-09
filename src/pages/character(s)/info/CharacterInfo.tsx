import { useContext, useEffect } from "react";
import { useParams, Link, Outlet, NavLink } from "react-router-dom";
import { GetACharacterContext } from "../../../contexts/character(s)/GetACharacterContext";
import { GetAllCharactersContext } from "../../../contexts/character(s)/GetAllCharactersContext";
import { Item } from "./Styles";

const CharacterInfo = () => {
  const { characterDetail, setCharacterId } = useContext(GetACharacterContext);
  const { id } = useParams();
  const { charactersList } = useContext(GetAllCharactersContext);
  const arrIndex = Number(id) - 1;
  const c = charactersList[arrIndex];

  useEffect(() => {
    setCharacterId(Number(id));
  }, [id]);

  return (
    <>
      <Item>
        <img src={c.image} />
        <p>{characterDetail.id}</p>
        <p>{characterDetail.name}</p>
        <p>{characterDetail.age ? characterDetail.age : "No data"}</p>
        <p>{characterDetail.occupation}</p>
        <p>{characterDetail.sex}</p>
        <p>{characterDetail.hair_color}</p>

        <NavLink to={`episodes`}>Episodes ▼</NavLink>
      </Item>
      <Outlet />
    </>
  );
};

export default CharacterInfo;
