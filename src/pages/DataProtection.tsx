import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function DataProtection() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">{t.legal.dataProtection}</h1>
      <div className="prose prose-slate prose-emerald max-w-none">
        <p className="lead text-xl text-slate-600 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        
        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">1. Purpose of this Policy</h2>
        <p className="text-slate-600 mb-6">
          This Data Protection Policy outlines how MediNear collects, uses, maintains, and discloses personal data collected from users of our website and mobile application. We are committed to ensuring that your privacy is protected and that your data is handled securely and in compliance with applicable data protection laws.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">2. Data Minimization</h2>
        <p className="text-slate-600 mb-6">
          We only collect personal data that is adequate, relevant, and limited to what is necessary in relation to the purposes for which they are processed. We do not collect excessive or irrelevant data.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">3. Storage Limitation</h2>
        <p className="text-slate-600 mb-6">
          Personal data is kept in a form which permits identification of data subjects for no longer than is necessary for the purposes for which the personal data are processed. We regularly review our data retention policies to ensure compliance.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">4. Integrity and Confidentiality</h2>
        <p className="text-slate-600 mb-6">
          Personal data is processed in a manner that ensures appropriate security of the personal data, including protection against unauthorized or unlawful processing and against accidental loss, destruction, or damage, using appropriate technical or organizational measures.
        </p>
      </div>
    </div>
  );
}
