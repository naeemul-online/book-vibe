import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";

const MainLayout = () => {
  return (
    <div className="mx-auto">
      <div className="h-20">
        <Nav></Nav>
      </div>
      <div className="container mx-auto mt-8">
      <Outlet></Outlet>
      </div>
      
    </div>
  );
};

export default MainLayout;
