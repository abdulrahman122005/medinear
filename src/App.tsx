/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import ForPharmacies from './pages/ForPharmacies';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import DataProtection from './pages/DataProtection';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="for-pharmacies" element={<ForPharmacies />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="data-protection" element={<DataProtection />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

