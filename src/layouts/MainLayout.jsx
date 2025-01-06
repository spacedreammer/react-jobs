import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Nav from "../components/Nav";
const MainLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      < ToastContainer/>
    </>
  );
};

export default MainLayout;
