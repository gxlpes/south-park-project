import { FindSomethingContext } from "../../contexts/search/FindSomethingContext";
import { useContext, useState } from "react";

const SearchInput = () => {
  const { setSearchTerm, searchTerm } = useContext(FindSomethingContext);
  const [inputTerm, setInputTerm] = useState<string>("");

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" onChange={(e) => setInputTerm(e.target.value)} />
        <button
          type="submit"
          onClick={() => {
            if (searchTerm.length > 0) {
              setSearchTerm("");
            }
            setSearchTerm(inputTerm);
          }}
        >
          Search
        </button>
      </form>
    </>
  );
};

export default SearchInput;
