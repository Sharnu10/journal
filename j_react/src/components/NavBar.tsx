import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navList = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Tasks", path: "/tasks" },
    { name: "Form", path: "/form" },
    { name: "TableFormik", path: "/table-formik" },
    { name: "Joke", path: "/joke" },
    { name: "ValidatePassword", path: "/validatePassword" },
    { name: "Dice", path: "/diceRoll" },
  ];

  return (
    <nav>
      <ul className="ul-list d-flex justify-content-around">
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
