import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/globals.scss';

import { ConfirmState } from "./context/state/ConfirmState";
import { LoadingState } from "./context/state/LoadingState";

import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import ConfirmBox from "./components/ConfirmBox";
import Loader from "./components/Loader";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <ConfirmState>
          <ConfirmBox />

          <LoadingState>
            <Loader />

            <Routes>
              <Route path="/" element={<Home/>} />

              <Route path="/*" element={<NotFound thing="page"/>} />
            </Routes>
          </LoadingState>
        </ConfirmState>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
