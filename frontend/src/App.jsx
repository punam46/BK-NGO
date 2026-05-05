import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Layout & Components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Involved from './pages/GetInvolved';
import Contact from './pages/Contact';
import TaRL from './pages/TaRL';
import Media from './pages/Media';
import Education from './pages/Education';
import SocialWelfare from './pages/SocialWelfare';
import MediaPublications from './pages/MediaPublications';
import Donate from './pages/Donate';
import PhotoGallery from './pages/PhotoGallery';
import Certifications from './pages/Certifications';
import RuralDevelopment from './pages/RuralDevelopment';
import DisabilityAffairs from './pages/DisabilityAffairs';
import ChildDevelopment from './pages/ChildDevelopment';
import TribalDevelopment from './pages/TribalDevelopment';
import WomanEmpowerment from './pages/WomanEmpowerment';
import OrphanSupport from './pages/OrphanSupport';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/tarl" element={<TaRL />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/involved" element={<Involved />} />
            <Route path="/media" element={<Media />} />
            <Route path="/programs/education" element={<Education />} />
            <Route path="/programs/social-welfare" element={<SocialWelfare />} />
            <Route path="/programs/media" element={<MediaPublications />} />
            <Route path="/programs/tribal-development" element={<TribalDevelopment />} />
            <Route path="/programs/disability-affair" element={<DisabilityAffairs />} />
            <Route path="/programs/child-development" element={<ChildDevelopment />} />
            <Route path="/programs/woman-empowerment" element={<WomanEmpowerment />} />
            <Route path="/programs/orphan-support" element={<OrphanSupport />} />
            <Route path="/programs/rural-development" element={<RuralDevelopment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/photo-gallery" element={<PhotoGallery />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/donate" element={<Donate />} />

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
