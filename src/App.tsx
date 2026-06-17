import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import { HowItWorks, Download, Pricing } from './pages/Pages';
import { Security, Changelog, Privacy, Terms } from './pages/Pages2';
import { UseCasesHub, UseCaseNewsrooms, UseCasePodcasts, UseCaseJournalists } from './pages/UseCases';
import { BlogHub, BlogPost1, BlogPost2, BlogPost3 } from './pages/Blog';

// Scroll restoration component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="download" element={<Download />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="security" element={<Security />} />
          <Route path="changelog" element={<Changelog />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          
          <Route path="use-cases" element={<UseCasesHub />} />
          <Route path="use-cases/newsrooms" element={<UseCaseNewsrooms />} />
          <Route path="use-cases/podcasts" element={<UseCasePodcasts />} />
          <Route path="use-cases/journalists" element={<UseCaseJournalists />} />
          
          <Route path="blog" element={<BlogHub />} />
          <Route path="blog/why-local-first" element={<BlogPost1 />} />
          <Route path="blog/cost-of-scrubbing-timelines" element={<BlogPost2 />} />
          <Route path="blog/what-transcription-accuracy-means" element={<BlogPost3 />} />
        </Route>
      </Routes>
    </Router>
  );
}
