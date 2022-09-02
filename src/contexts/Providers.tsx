import { GetAllCharactersInfo } from "./GetAllCharactersContext";
import { IChildren } from "../interfaces/reactInterfaces";

const Providers = ({ children }: IChildren) => {
  return <GetAllCharactersInfo>{children}</GetAllCharactersInfo>;
};

export default Providers;
