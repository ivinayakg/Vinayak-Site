import { useEffect, useRef, useState } from "react";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuI, setMenuI] = useState(true);
  const menuBox = useRef();

  useEffect(() => {
    setIsMobile(window.screen.width <= 600);
    if (isMobile) {
      menuBox.current.style.display = "none";
    } else {
      menuBox.current.style.display = "display";
    }
  }, [isMobile]);

  const menuClick = () => {
    if (!menuI) {
      menuBox.current.style.display = "none";
    } else if (menuI) {
      menuBox.current.style.display = "block";
    }
    setMenuI(!menuI);
    console.log(menuBox.current.style);
  };

  return (
    <div className="section" id="nav">
      <div className="nav-cont">
        <div className="brand">
          <Link to="/">
            <h1>Vinayak Goyal</h1>
          </Link>
        </div>
        {isMobile && (
          <div className="menu-icon" onClick={menuClick}>
            {menuI && <MenuAlt1Icon />}
            {!menuI && <XIcon />}
          </div>
        )}
        <div className="menu-links" ref={menuBox}>
          <ul>
            <li className="link">
              <Link to="/">Home</Link>
            </li>
            <li className="link">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="link">
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
