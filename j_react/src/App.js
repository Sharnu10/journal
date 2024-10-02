import { Route, Routes } from "react-router-dom";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./Home";
import Products from "./products";
import { About } from "./about";
import NavBar from "./components/NavBar";
import Tasks from "./components/tasks";
import AddForm from "./components/addForm";
import FormikExample from "./components/formik";
import "./styles/global.scss";

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>

      <div className="App">
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<FormikExample />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
