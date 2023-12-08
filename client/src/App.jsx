import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/globals.scss';

import { ConfirmState } from "./state/ConfirmState";

import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import ConfirmBox from "./components/ConfirmBox";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <ConfirmState>
          <ConfirmBox />
          <Routes>
            <Route path="/" element={<Home/>} />

            <Route path="/*" element={<NotFound thing="page"/>} />
          </Routes>
        </ConfirmState>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
