import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Navbar from "../pages/Navbar";

const Layout = () => {
  return (
    <div>
      <Header />
      {/* <Navbar /> */}
      <Outlet /> {/* This is where the routed pages will render */}
      <Footer />
    </div>
  );
};

export default Layout;
