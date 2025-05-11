import { Link } from "react-router-dom";
import { useDataContext } from "../context/dataContext";

export default function Sidebar({
  props: { navigationLinks, showSidebar, isShowSidebar },
}) {
  const { sectionRefs, scrollTo } = useDataContext();

  return (
    <>
      {showSidebar && <div id="overlay" onClick={isShowSidebar}></div>}

      <div id="sidebar" className={showSidebar ? "show" : ""}>
        <div id="sidebar-header">
          <div id="logo-container">
            <Link to="/">
              <img id="logo" src="/img/logo.png" alt="logo" />
            </Link>
          </div>
          <div id="links-btn-container">
            <button
              onClick={isShowSidebar}
              className="visibility-sidebar-btn"
              type="button"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>

        <ul className="sidebar-list">
          {navigationLinks.map((l, i) => (
            <li key={i} className="navigation-item">
              <button
                className="nav-btn"
                aria-current="page"
                onClick={() => {
                  scrollTo(sectionRefs[`section${i + 1}Ref`]);
                  isShowSidebar();
                }}
              >
                {l.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
