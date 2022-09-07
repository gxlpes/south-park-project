import { GetAllCharactersProvider } from "./GetAllCharactersContext";
import { GetACharacterContextProvider } from "./GetACharacterContext";
import { GetEpisodeContextProvider } from "./GetEpisodeContext";
import { IChildren } from "../interfaces/reactInterfaces";
import { GetAllEpisodesContextProvider } from "./GetAllEpisodesContext";

const Providers = ({ children }: IChildren) => {
  return (
    <>
      <GetAllCharactersProvider>
        <GetAllEpisodesContextProvider>
          <GetACharacterContextProvider>
            <GetEpisodeContextProvider>{children}</GetEpisodeContextProvider>
          </GetACharacterContextProvider>
        </GetAllEpisodesContextProvider>
      </GetAllCharactersProvider>
    </>
  );
};

export default Providers;
