import { useContext, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { GetACharacterContext } from "../../../contexts/character(s)/GetACharacterContext";
import { GetAllCharactersContext } from "../../../contexts/character(s)/GetAllCharactersContext";
import { Item } from "../../../styles/ui/Info";

const CharacterInfo = () => {
  const { characterDetail, setCharacterId } = useContext(GetACharacterContext);
  const { id } = useParams();
  const { charactersList } = useContext(GetAllCharactersContext);
  const arrIndex = Number(id) - 1;
  const c = charactersList[arrIndex];

  useEffect(() => {
    if (c === undefined) {
      setCharacterId(Number(id));
    } else {
      setCharacterId(Number(id));
    }
  }, [id]);

  if (charactersList[arrIndex] !== undefined) {
    return (
      <>
        <Item>
          <img src={c.image} />
          <div className="info">
            <p>
              <b>ID:</b> {c.id}
            </p>
            <p>
              <b>Name:</b> {c.name}
            </p>
            <p>
              <b>Age: </b>
              {c.age ? c.age : "No data"}
            </p>
            <p>
              <b>Occupation:</b> {c.occupation}
            </p>
            <p>
              <b>Sex:</b> {c.sex}
            </p>
            <p>
              <b>Hair color: </b>
              {c.hair_color}
            </p>
          </div>

          <a target="blank" href={`https://southpark.fandom.com/wiki/${c.name}`}>
            Fandom
          </a>

          <Link to={`episodes`}>Episodes ▼</Link>
        </Item>
        <Outlet />
      </>
    );
  } else {
    return (
      <>
        <Item>
          <img src={characterDetail.image} />
          <p>{characterDetail.id}</p>
          <p>{characterDetail.name}</p>
          <p>{characterDetail.age ? characterDetail.age : "No data"}</p>
          <p>{characterDetail.occupation}</p>
          <p>{characterDetail.sex}</p>
          <p>{characterDetail.hair_color}</p>

          <Link to={`episodes`}>Episodes ▼</Link>
        </Item>
        <Outlet />
      </>
    );
  }
};

export default CharacterInfo;
