import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/haha" element={<Home />} />;
    </Routes>
  );
};

export default AllRoutes;
