import 'bulma/css/bulma.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/layout/nav-bar/Navbar.js';
import HomePage from './components/pages/home/HomePage.js';
import ContentPage from './components/pages/content/ContentPage.js';
import NotFoundPage from './components/pages/not-found/NotFoundPage.js';
import Footer from './components/layout/footer/Footer.js';


function App() {
  return (
    <div className="main">
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/article/*" element={<ContentPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
