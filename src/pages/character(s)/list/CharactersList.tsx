import { Link } from "react-router-dom";
import { GetAllCharactersContext } from "../../../contexts/character(s)/GetAllCharactersContext";
import { useContext } from "react";
import { Item, ListContainer, ListSection } from "./Styles";

const CharactersList: any = () => {
  const { charactersList } = useContext(GetAllCharactersContext);

  return (
    <>
      <ListContainer>
        <ListSection>
          {charactersList.map((el) => (
            <Link to={`/character/${el.id}`}>
              <Item>
                <img src={el.image} />
                <div className="main-info">
                  <h2>{el.name}</h2>
                  <p>Occupation: {el.occupation}</p>
                  <p>Episodes: {el.episodes.length}</p>
                </div>
                <div className="side-info">
                  <p>#{el.id}</p>
                </div>
              </Item>
            </Link>
          ))}
        </ListSection>
      </ListContainer>
    </>
  );
};
export default CharactersList;
