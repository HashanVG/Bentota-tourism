import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import DefaultLayout from './layouts/AuthorizedUserLaysout.jsx';
import GuestLayout from './layouts/GuestUserLayout.jsx';
import HomePage from './pages/default/HomePage.jsx';
import AboutPage from './pages/default/AboutPage.jsx';
import ContactPage from './pages/default/ContactPage.jsx';
import RoundTourPage from './pages/default/RoundTourPage.jsx';

function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
       {/* Guest only routes */}
      <Route element={<GuestLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/excursions" element={<div>ExcursionPage</div>}/>
        <Route path="/round-tour" element={<RoundTourPage />} />
        <Route path="/round-tours" element={<RoundTourPage />} />
        <Route path="/activities" element={<RoundTourPage />} />
        <Route path="/voiceover" element={<RoundTourPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>

      {/*Protected Layout*/}
      <Route element={<DefaultLayout />}>
        <Route path="/dashboard" element={<div>Dashboard</div>} />
        <Route path="/users" element={<div>Users Page</div>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
