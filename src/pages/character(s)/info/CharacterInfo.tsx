import { useContext, useEffect } from "react";
import { useParams, Link, useNavigate, Outlet } from "react-router-dom";
import { GetACharacterContext } from "../../../contexts/character(s)/GetACharacterContext";
import { Item } from "./Styles";

const CharacterInfo = () => {
  const { characterDetail, setCharacterId } = useContext(GetACharacterContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setCharacterId(Number(id));
  }, [id]);

  return (
    <>
      <Item>
        <p>{characterDetail.id}</p>
        <p>{characterDetail.name}</p>
        <p>{characterDetail.age ? characterDetail.age : "No data"}</p>
        <p>{characterDetail.occupation}</p>
        <p>{characterDetail.sex}</p>
        <p>{characterDetail.hair_color}</p>
      </Item>

      <Link to={`episodes`}>Episodes</Link>
      <Outlet />
    </>
  );
};

export default CharacterInfo;
