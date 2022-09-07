import { FindSomethingContext } from "../../contexts/FindSomethingContext";
import { useContext } from "react";

const SearchInput = () => {
  const { setSeachTerm, setSearchCategory } = useContext(FindSomethingContext);
  return (
    <>
      <form>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchInput;
