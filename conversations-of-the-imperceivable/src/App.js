import 'bulma/css/bulma.min.css';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/layout/Navbar.js';
import HomePage from "./pages/HomePage.js";
import PageNotFound from "./pages/NotFoundPage.js";


function App() {
  return (
    <div classname="main">
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route index element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
