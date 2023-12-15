import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/globals.scss';

import { ConfirmState } from "./context/state/ConfirmState";
import { LoadingState } from "./context/state/LoadingState";
import { AlertState } from "./context/state/AlertState";

import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import ConfirmBox from "./components/widgets/ConfirmBox";
import Loader from "./components/widgets/Loader";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Alert from "./components/widgets/Alert";
import ScrollToTop from "./components/widgets/ScrollToTop";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <AlertState><LoadingState>
        <Loader />

        <ConfirmState>
          <ConfirmBox />
          <Navbar />
          <Alert />

          <Routes>
            <Route path="/" element={<Home/>} />

            <Route path="/*" element={<NotFound thing="page"/>} />
          </Routes>
        </ConfirmState>

        <Footer />
      </LoadingState></AlertState>
    </BrowserRouter>
  )
}

export default App;
