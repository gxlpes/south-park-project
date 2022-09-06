import { GetAllCharactersProvider } from "./GetAllCharactersContext";
import { GetACharacterContextProvider } from "./GetACharacterContext";
import { GetEpisodeContextProvider } from "./GetEpisodeContext";
import { IChildren } from "../interfaces/reactInterfaces";

const Providers = ({ children }: IChildren) => {
  return (
    <GetAllCharactersProvider>
      <GetACharacterContextProvider>
        <GetEpisodeContextProvider>{children}</GetEpisodeContextProvider>
      </GetACharacterContextProvider>
    </GetAllCharactersProvider>
  );
};

export default Providers;
