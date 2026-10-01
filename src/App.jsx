import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import DefaultLayout from './layouts/AuthorizedUserLaysout.jsx';
import GuestLayout from './layouts/GuestUserLayout.jsx';
import HomePage from './pages/default/HomePage.jsx';
import AboutPage from './pages/default/AboutPage.jsx';
import ContactPage from './pages/default/ContactPage.jsx';
import ExcursionsPage from './pages/default/ExcursionsPage.jsx';
import ExcursionDetailPage from './pages/default/ExcursionDetailPage.jsx';

function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
       {/* Guest only routes */}
      <Route element={<GuestLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/excursions" element={<ExcursionsPage />} />
        <Route path="/excursions/:slug" element={<ExcursionDetailPage />} />
        <Route path="/voiceover" element={<div>Activities Page</div>} />
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
