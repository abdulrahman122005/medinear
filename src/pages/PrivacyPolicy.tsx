import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">{t.legal.privacy}</h1>
      <div className="prose prose-slate prose-emerald max-w-none">
        <p className="lead text-xl text-slate-600 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        
        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">1. Introduction</h2>
        <p className="text-slate-600 mb-6">
          Welcome to MediNear. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website or use our application.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">2. The Data We Collect</h2>
        <p className="text-slate-600 mb-6">
          We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
        </p>
        <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
          <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
          <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
          <li><strong>Health Data</strong> includes prescriptions, medical history, and consultation notes (processed with explicit consent).</li>
          <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">3. How We Use Your Data</h2>
        <p className="text-slate-600 mb-6">
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
        </p>
        <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
          <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
          <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          <li>Where we need to comply with a legal obligation.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">4. Data Security</h2>
        <p className="text-slate-600 mb-6">
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
        </p>
      </div>
    </div>
  );
}
