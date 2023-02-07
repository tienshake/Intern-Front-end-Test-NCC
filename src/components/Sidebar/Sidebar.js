import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar__list">
        <li className="sidebar__item sidebar__item--active">Home</li>
        <li className="sidebar__item">Service</li>
        <li className="sidebar__item">News</li>
        <li className="sidebar__item">Blog</li>
        <li className="sidebar__item">Contact</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
