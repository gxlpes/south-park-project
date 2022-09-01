import { useEffect, useState } from "react";
import api from "./services/api";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api.get("/characters").then((response) => {
      setCharacters(response.data);
      console.log(response.data);
    });
  }, []);

  return <div>Hello</div>;
}

export default App;
