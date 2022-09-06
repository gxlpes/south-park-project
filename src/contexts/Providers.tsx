import { GetAllCharactersProvider } from "./GetAllCharactersContext";
import { GetACharacterContext, GetACharacterContextProvider } from "./GetACharacterContext";
import { IChildren } from "../interfaces/reactInterfaces";

const Providers = ({ children }: IChildren) => {
  return (
    <GetAllCharactersProvider>
      <GetACharacterContextProvider>{children}</GetACharacterContextProvider>
    </GetAllCharactersProvider>
  );
};

export default Providers;
