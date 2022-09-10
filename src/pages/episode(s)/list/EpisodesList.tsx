import { Link } from "react-router-dom";
import { GetAllEpisodesContext } from "../../../contexts/episode(s)/GetAllEpisodesContext";
import { useContext } from "react";
import { Item, ListContainer, ListSection } from "./Styles";

const EpisodesList: any = () => {
  const { episodesList } = useContext(GetAllEpisodesContext);

  return episodesList.map((el) => (
    <>
      <ListContainer>
        <ListSection>
          <Link to={`/episode/${el.id}`}>
            <Item>
              <div className="image">
                <img src={el.thumbnail_url} />
              </div>
              <div className="info">
                <p>{el.name}</p>
                <p>
                  E{el.episode}S{el.season}
                </p>
              </div>
            </Item>
          </Link>
        </ListSection>
      </ListContainer>
    </>
  ));
};

export default EpisodesList;
