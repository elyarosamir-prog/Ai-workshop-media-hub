import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ScrollToHash from "./components/ScrollToHash";
import About from "./pages/About";
import Applications from "./pages/Applications";
import Faq from "./pages/Faq";
import Teaser from "./pages/Teaser";
import Reels from "./pages/Reels";
import Results from "./pages/Results";
import Games from "./pages/Games";
import Feedback from "./pages/Feedback";
import ParticipantResults from "./pages/ParticipantResults";
import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import Tools from "./pages/Tools";
import Materials from "./pages/Materials";
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
          <Route path="/materials" element={<Materials />} />
          <Route path="/team" element={<Team />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/about" element={<About />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/teaser" element={<Teaser />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/results" element={<Results />} />
          <Route path="/games" element={<Games />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/participants-results" element={<ParticipantResults />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
