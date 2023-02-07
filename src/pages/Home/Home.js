import "./Home.css";
import Logo from "../../assets/icon/logo.svg";
import { HOME_CONTENT, HOME_TITLE, SLIDES } from "../../common/text";

const Home = () => {
  return (
    <div className="home">
      <div className="home__logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="home__content">
        <div className="home__content-title">
          <h3>{HOME_TITLE}</h3>
        </div>
        <div className="home__content-text">{HOME_CONTENT}</div>
      </div>
      <ul className="home__slide">
        {SLIDES.map((item, index) => {
          return (
            <li className="home__slide-item" key={index}>
              <div className="home__slide-title">
                <h3>{item.title}</h3>
              </div>
              <div className="home__slide-content">
                <div className="floated">
                  <img src={item.icon} alt="css" />
                </div>
                <p>{item.content}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
