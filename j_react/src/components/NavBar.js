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
      <ul>
        {navList.map((item) => (
          <li> {<NavLink to={item.path}>{item.name}</NavLink>} </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
