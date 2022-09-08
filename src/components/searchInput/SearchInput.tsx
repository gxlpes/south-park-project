import { FindSomethingContext } from "../../contexts/FindSomethingContext";
import { useContext, useState } from "react";

const SearchInput = () => {
  const { setSearchTerm, searchTerm, setSearchCategory } = useContext(FindSomethingContext);
  const [inputCategory, setInputCategory] = useState<string>("");
  const [inputTerm, setInputTerm] = useState<string>("");

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="category">Category</label>
        <select id="category" name="category" onChange={(e) => setInputCategory(e.target.value)}>
          <option hidden disabled selected>
            -- select an option --
          </option>
          <option value="characters">Characters</option>
          <option value="episodes">Episodes</option>
        </select>
        <input type="text" onChange={(e) => setInputTerm(e.target.value)} />
        <button
          type="submit"
          onClick={() => {
            if (searchTerm.length > 0) {
              setSearchTerm("");
              setSearchCategory("");
            }
            setSearchTerm(inputTerm);
            setSearchCategory(inputCategory);
          }}
        >
          Search
        </button>
      </form>
    </>
  );
};

export default SearchInput;
