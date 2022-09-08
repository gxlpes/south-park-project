import { GetAllCharactersProvider } from "./character(s)/GetAllCharactersContext";
import { GetACharacterContextProvider } from "./character(s)/GetACharacterContext";
import { IChildren } from "../interfaces/reactInterfaces";
import { GetAEpisodeContextProvider } from "./episode(s)/GetAEpisodeContext";
import { GetAllEpisodesContextProvider } from "./episode(s)/GetAllEpisodesContext";
import { FindSomethingContextProvider } from "./FindSomethingContext";
import { ThemesContextProvider } from "./ThemesContext";

const Providers = ({ children }: IChildren) => {
  return (
    <>
      <ThemesContextProvider>
        <GetAllCharactersProvider>
          <GetAllEpisodesContextProvider>
            <FindSomethingContextProvider>
              <GetACharacterContextProvider>
                <GetAEpisodeContextProvider>{children}</GetAEpisodeContextProvider>
              </GetACharacterContextProvider>
            </FindSomethingContextProvider>
          </GetAllEpisodesContextProvider>
        </GetAllCharactersProvider>
      </ThemesContextProvider>
    </>
  );
};

export default Providers;
