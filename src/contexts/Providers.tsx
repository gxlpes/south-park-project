import { GetAllCharactersProvider } from "./character(s)/GetAllCharactersContext";
import { GetACharacterContextProvider } from "./character(s)/GetACharacterContext";
import { IChildren } from "../interfaces/reactInterfaces";
import { GetAEpisodeContextProvider } from "./episode(s)/GetAEpisodeContext";
import { GetAllEpisodesContextProvider } from "./episode(s)/GetAllEpisodesContext";

const Providers = ({ children }: IChildren) => {
  return (
    <>
      <GetAllCharactersProvider>
        <GetAllEpisodesContextProvider>
          <GetACharacterContextProvider>
            <GetAEpisodeContextProvider>{children}</GetAEpisodeContextProvider>
          </GetACharacterContextProvider>
        </GetAllEpisodesContextProvider>
      </GetAllCharactersProvider>
    </>
  );
};

export default Providers;
