import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navList = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Tasks", path: "/tasks" },
  ];

  return (
    <nav>
      <ul className="ul-list">
        {navList.map((item) => (
          <li key={item.name}>
            {<NavLink to={item.path}>{item.name}</NavLink>}{" "}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;