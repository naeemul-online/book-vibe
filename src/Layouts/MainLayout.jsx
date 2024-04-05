import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";

const MainLayout = () => {
  return (
    <div>
      <div className="h-20">
        <Nav></Nav>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
