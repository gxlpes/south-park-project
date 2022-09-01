import { GetAllCharactersProvider } from "./GetAllCharactersContext";
import { IChildren } from "../interfaces/reactInterfaces";

const Providers = ({ children }: IChildren) => {
  return <GetAllCharactersProvider>{children}</GetAllCharactersProvider>;
};

export default Providers;
