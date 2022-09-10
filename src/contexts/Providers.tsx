import { GetAllCharactersProvider } from "./character(s)/GetAllCharactersContext";
import { GetACharacterContextProvider } from "./character(s)/GetACharacterContext";
import { IChildren } from "../interfaces/reactInterfaces";
import { GetAEpisodeContextProvider } from "./episode(s)/GetAEpisodeContext";
import { GetAllEpisodesContextProvider } from "./episode(s)/GetAllEpisodesContext";
import { FindSomethingContextProvider } from "./search/FindSomethingContext";
import { ThemesContextProvider } from "./character(s)/ThemesContext";

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
