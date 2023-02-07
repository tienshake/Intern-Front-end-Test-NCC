import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import "./Layout.css";

const Layout = (props) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout__container">
        <div className="layout__content">{props.children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
