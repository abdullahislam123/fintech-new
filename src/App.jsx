import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Swap from './pages/Swap';
import Bridge from './pages/Bridge';
import Stake from './pages/Stake';
import NFTs from './pages/NFTs';
import Activity from './pages/Activity';
import Elite from './pages/Elite';
import Resources from './pages/Resources';
import Download from './pages/Download';
import FeatureDetail from './pages/FeatureDetail';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ensure we scroll to top even after react renders the new page
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/bridge" element={<Bridge />} />
          <Route path="/stake" element={<Stake />} />
          <Route path="/nfts" element={<NFTs />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/vmi" element={<Elite />} />
          <Route path="/download" element={<Download />} />
          {/* Tab Routes mapped to FeatureDetail */}
          <Route path="/apply" element={<FeatureDetail />} />
          <Route path="/policy" element={<FeatureDetail />} />
          <Route path="/reporting" element={<FeatureDetail />} />
          <Route path="/docs" element={<FeatureDetail />} />
          <Route path="/community" element={<FeatureDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
