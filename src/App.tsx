import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import Tools from "./pages/Tools";
import Team from "./pages/Team";
import Documentation from "./pages/Documentation";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToHash />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/team" element={<Team />} />
          <Route path="/documentation" element={<Documentation />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
