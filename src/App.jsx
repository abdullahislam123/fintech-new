import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import { WalletProvider } from './context/WalletContext';
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
import Reporting from './pages/Reporting';
import FAQ from './pages/FAQ';
import JoinHub from './pages/JoinHub';
import Docs from './pages/Docs';
import CardBenefits from './pages/CardBenefits';
import VirtualCards from './pages/VirtualCards';
import Policy from './pages/Policy';
import CardApply from './pages/CardApply';
import CardTopup from './pages/CardTopup';
import Community from './pages/Community';
import GenericPage from './pages/GenericPage';
import Support from './pages/Support';
import Careers from './pages/Careers';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <WalletProvider>
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
            <Route path="/resources" element={<Resources />} />
            
            {/* Individual Feature Pages */}
            <Route path="/card-benefits" element={<CardBenefits />} />
            <Route path="/card-topup" element={<CardTopup />} />
            <Route path="/virtual-cards" element={<VirtualCards />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/reporting" element={<Reporting />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/join" element={<JoinHub />} />
            <Route path="/community" element={<Community />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/support" element={<Support />} />
            <Route path="/careers" element={<Careers />} />
            
            {/* Missing Footer Pages */}
            <Route path="/api" element={<GenericPage title="VMI API" subtitle="Integrate elite-grade liquidity." content="Robust documentation for REST and WebSocket APIs..." />} />
            <Route path="/audits" element={<GenericPage title="Security Audits" subtitle="Provably secure architecture." content="View our comprehensive smart contract audit reports." />} />
            <Route path="/bounty" element={<GenericPage title="Bug Bounty" subtitle="Secure the network, earn rewards." content="$500k active bug bounty program on Immunefi." />} />
            <Route path="/open-source" element={<GenericPage title="Open Source" subtitle="Transparent by design." content="Explore our decentralized open-source repositories." />} />
            <Route path="/governance" element={<GenericPage title="Governance" subtitle="Decentralized protocol management." content="Participate in DAO voting and proposals." />} />
            <Route path="/tokenomics" element={<GenericPage title="Tokenomics" subtitle="Sustainable economic design." content="Understanding the VMI and vUSD structural flow." />} />
            <Route path="/blog" element={<GenericPage title="Blog" subtitle="Latest insights & updates." content="Read the latest news from the Vaultora core team." />} />
            <Route path="/assets" element={<GenericPage title="Brand Assets" subtitle="Official press kit." content="Download logos, fonts, and guidelines." />} />
            <Route path="/terms" element={<GenericPage title="Terms of Service" subtitle="Legal guidelines." content="Vaultora network terms and conditions." />} />
            <Route path="/cookies" element={<GenericPage title="Cookie Policy" subtitle="Your data, your choice." content="How we use cookies to improve your experience." />} />
            <Route path="/disclaimer" element={<GenericPage title="Disclaimer" subtitle="Risk disclosure." content="Important information regarding digital assets." />} />
            <Route path="/compliance" element={<GenericPage title="Compliance" subtitle="Regulatory alignment." content="Our global compliance and AML directives." />} />
            <Route path="/apply" element={<CardApply />} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </WalletProvider>
    </Router>
  );
}

export default App;
