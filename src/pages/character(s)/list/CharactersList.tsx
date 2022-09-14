import { Link } from "react-router-dom";
import { GetAllCharactersContext } from "../../../contexts/character(s)/GetAllCharactersContext";
import { useContext } from "react";
import { Item, ListContainer, ListSection } from "../../../styles/ui/Lists";

const CharactersList: any = () => {
  const { charactersList } = useContext(GetAllCharactersContext);

  return (
    <>
      <ListContainer>
        <ListSection>
          {charactersList.map((el) => (
            <Link key={el.id} to={`/character/${el.id}`}>
              <Item>
                <div className="image">
                  <img src={el.image} />
                </div>
                <div className="main-info">
                  <h2>{el.name}</h2>
                  <p>
                    <b> Occupation: </b>
                    {el.occupation ? el.occupation : "None"}
                  </p>
                  <p>
                    <b> Episodes: </b>
                    {el.episodes.length}
                  </p>
                  <p>
                    <b> Religion:</b> {el.religion ? el.religion : "None"}
                  </p>
                  <p>
                    <b> Relatives: </b>
                    {el.relatives.length ? el.relatives.length : "None"}
                  </p>
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
