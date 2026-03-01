import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Users, 
  Settings, 
  BarChart3, 
  CheckCircle2, 
  Building2, 
  Upload,
  ArrowRight
} from 'lucide-react';

export default function ForPharmacies() {
  const { t, dir } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const benefits = [
    { icon: TrendingUp, text: t.forPharmacies.increaseSales },
    { icon: Users, text: t.forPharmacies.reachCustomers },
    { icon: Settings, text: t.forPharmacies.manageOrders },
    { icon: BarChart3, text: t.forPharmacies.analytics },
    { icon: CheckCircle2, text: t.forPharmacies.simpleOnboarding },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-emerald-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pharmacy2/1920/1080?blur=10')] opacity-10 mix-blend-overlay pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-4 bg-emerald-800/50 rounded-2xl mb-8 backdrop-blur-sm border border-emerald-700/50">
              <Building2 className="h-12 w-12 text-emerald-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.forPharmacies.title}</h1>
            <p className="text-xl text-emerald-100 mb-12">{t.forPharmacies.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">{t.forPharmacies.benefitsTitle}</h2>
            <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-all group"
              >
                <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-slate-800">{benefit.text}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-24 bg-slate-50" id="register">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-xl border border-slate-200 overflow-hidden">
            <div className="p-8 md:p-12 lg:p-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.registrationForm.title}</h2>
                <p className="text-slate-500">{t.forPharmacies.subtitle}</p>
              </div>

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.registrationForm.successMessage}</h3>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-emerald-600 font-medium hover:text-emerald-700 underline underline-offset-4"
                  >
                    Submit another application
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  {/* Basic Info */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm">1</span>
                      {t.registrationForm.basicInfo}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">{t.registrationForm.pharmacyName} *</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">{t.registrationForm.ownerName} *</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">{t.registrationForm.phone} *</label>
                        <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" dir="ltr" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">{t.registrationForm.email} *</label>
                        <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" dir="ltr" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">{t.registrationForm.city} *</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium text-slate-700">{t.registrationForm.address} *</label>
                        <textarea required rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-slate-200 w-full" />

                  {/* Operational Info */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm">2</span>
                      Operational Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">{t.registrationForm.workingHours} *</label>
                        <input required type="text" placeholder="e.g. 9 AM - 11 PM" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">{t.registrationForm.licenseNumber} *</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium text-slate-700">{t.registrationForm.uploadLicense} *</label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-xl hover:border-emerald-500 transition-colors bg-slate-50 cursor-pointer">
                          <div className="space-y-1 text-center">
                            <Upload className="mx-auto h-12 w-12 text-slate-400" />
                            <div className="flex text-sm text-slate-600 justify-center">
                              <span className="relative cursor-pointer bg-transparent rounded-md font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500">
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" required />
                              </span>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-slate-500">PDF, PNG, JPG up to 10MB</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-slate-200 w-full" />

                  {/* Services */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm">3</span>
                      {t.registrationForm.availableServices}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                      <label className="flex items-center gap-3 p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                        <input type="checkbox" className="w-5 h-5 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500" />
                        <span className="font-medium text-slate-700">{t.registrationForm.delivery}</span>
                      </label>
                      <label className="flex items-center gap-3 p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                        <input type="checkbox" className="w-5 h-5 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500" />
                        <span className="font-medium text-slate-700">{t.registrationForm.hours24}</span>
                      </label>
                      <label className="flex items-center gap-3 p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                        <input type="checkbox" className="w-5 h-5 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500" />
                        <span className="font-medium text-slate-700">{t.registrationForm.consultations}</span>
                      </label>
                    </div>

                    <div className="space-y-4">
                      <label className="text-sm font-medium text-slate-700">{t.registrationForm.collaborateDoctors}</label>
                      <div className="flex gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="doctors" className="w-4 h-4 text-emerald-600 border-slate-300 focus:ring-emerald-500" />
                          <span className="text-slate-700">{t.registrationForm.yes}</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="doctors" className="w-4 h-4 text-emerald-600 border-slate-300 focus:ring-emerald-500" />
                          <span className="text-slate-700">{t.registrationForm.no}</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-4 px-8 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-emerald-600/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          {t.registrationForm.submit}
                          <ArrowRight className={`h-5 w-5 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                        </>
                      )}
                    </button>
                    <p className="text-center text-sm text-slate-500 mt-4">
                      By submitting this form, you agree to our <a href="/terms" className="text-emerald-600 hover:underline">Terms & Conditions</a> and <a href="/privacy-policy" className="text-emerald-600 hover:underline">Privacy Policy</a>.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
