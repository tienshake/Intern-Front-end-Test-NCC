import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import "./Layout.css";

const Layout = (props) => {
  return (
    <div>
      <Sidebar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
