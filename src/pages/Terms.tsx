import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Terms() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">{t.legal.terms}</h1>
      <div className="prose prose-slate prose-emerald max-w-none">
        <p className="lead text-xl text-slate-600 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        
        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">1. Agreement to Terms</h2>
        <p className="text-slate-600 mb-6">
          These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and MediNear ("we," "us" or "our"), concerning your access to and use of the MediNear website and mobile application.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">2. User Representations</h2>
        <p className="text-slate-600 mb-6">
          By using the Site, you represent and warrant that:
        </p>
        <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
          <li>All registration information you submit will be true, accurate, current, and complete.</li>
          <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
          <li>You have the legal capacity and you agree to comply with these Terms and Conditions.</li>
          <li>You are not under the age of 18.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">3. Medical Disclaimer</h2>
        <p className="text-slate-600 mb-6">
          The information provided on the MediNear platform is for informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">4. Pharmacy Responsibilities</h2>
        <p className="text-slate-600 mb-6">
          Partner pharmacies are independent contractors and are solely responsible for the accuracy of their inventory, pricing, and the quality of the products they dispense. MediNear acts only as an intermediary platform connecting users with pharmacies.
        </p>
      </div>
    </div>
  );
}
