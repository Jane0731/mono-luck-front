import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./Home/Home";
import RegisterPage from "./RegisterPage/registerPage";
import SearchPage from "./Searchpage/Searchpage";
import FinishPage from "./RegisterFinishPage/RegisterFinishPage";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registerPage" element={<RegisterPage />} />
        <Route path="/searchPage" element={<SearchPage />} />
        <Route path="/FinishPage" element={<FinishPage />} />

      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
