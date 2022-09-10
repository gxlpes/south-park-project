import { Link } from "react-router-dom";
import { GetAllEpisodesContext } from "../../../contexts/episode(s)/GetAllEpisodesContext";
import { useContext } from "react";
import { Item, ListContainer, ListSection } from "../../../styles/ui/Lists";

const EpisodesList: any = () => {
  const { episodesList } = useContext(GetAllEpisodesContext);

  return (
    <>
      <ListContainer>
        <ListSection>
          {episodesList.map((el) => (
            <Link to={`/episode/${el.id}`}>
              <Item>
                <div className="image">
                  <img className="big-img" src={el.thumbnail_url} />
                </div>
                <div className="main-info">
                  <h2>{el.name}</h2>
                  <p>Air date: {el.air_date}</p>
                  <p>
                    E{el.episode}S{el.season}
                  </p>
                </div>
              </Item>
            </Link>
          ))}
        </ListSection>
      </ListContainer>
    </>
  );
};

export default EpisodesList;
