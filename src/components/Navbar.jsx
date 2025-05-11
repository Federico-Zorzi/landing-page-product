import { NavLink } from "react-router-dom";

import Sidebar from "./Sidebar";
import { useState } from "react";
import { useDataContext } from "../context/dataContext";

export default function Navbar() {
  const { sectionRefs, scrollTo } = useDataContext();

  const navigationLinks = [
    { title: "Home", link: "/" },
    { title: "I punti di forza", link: "/strengthspoints" },
    { title: "Recensioni", link: "/reviews" },
    { title: "Paperelle", link: "/ducks" },
    { title: "FAQs", link: "/faqs" },
    { title: "Newsletter", link: "/newsletter" },
  ];

  const [showSidebar, setShowSidebar] = useState(false);
  const isShowSidebar = () => setShowSidebar((currVal) => !currVal);

  return (
    <>
      <nav className="navbar">
        <div id="logo-container">
          <NavLink to="/">
            <img id="logo" src="/img/logo.png" alt="logo" />
          </NavLink>
        </div>

        <div className="d-none d-md-block">
          <ul className="nav-btn-list d-flex">
            {navigationLinks.map((l, i) => (
              <li key={i}>
                <button
                  className="nav-btn"
                  onClick={() => scrollTo(sectionRefs[`section${i + 1}Ref`])}
                >
                  {l.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div id="links-btn-container" className="d-md-none">
          <button
            onClick={isShowSidebar}
            className="visibility-sidebar-btn"
            type="button"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* SIDEBAR */}
      <Sidebar props={{ navigationLinks, showSidebar, isShowSidebar }} />
    </>
  );
}
