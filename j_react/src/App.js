import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS
import "ag-grid-community/styles/ag-theme-alpine.css"; // Alpine theme CSS

import "./App.scss";
import Home from "./Home";
import Products from "./products";
import { About } from "./about";
import NavBar from "./components/NavBar";
import Tasks from "./components/tasks";
import AddForm from "./components/addForm";
import FormikExample from "./components/formik";
import TableFormik from "./components/table-formik";
import Joke from "./components/joke";
import ValidatePassword from "./components/validator";
import RollingDice from "./components/rolling-dice";
import Todo from "./components/todo";

import "./styles/global.scss";
import "./common/utils/fontawesome";

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>

      <div className="ADicepp">
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<FormikExample />} />
            <Route path="/table-formik" element={<TableFormik />} />
            <Route path="/joke" element={<Joke />} />
            <Route path="/validatePassword" element={<ValidatePassword />} />
            <Route path="/diceRoll" element={<RollingDice />} />
            <Route path="/todo" element={<Todo />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
