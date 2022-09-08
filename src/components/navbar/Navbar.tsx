import { useNavigate } from "react-router-dom";

const Navbar = (props: any) => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/characters/1")}>Characters</button>
      <button onClick={() => navigate("/episodes/1")}>Episodes</button>
    </>
  );
};

export default Navbar;
