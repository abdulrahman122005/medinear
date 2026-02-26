import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { 
  Search, 
  MapPin, 
  CreditCard, 
  PackageCheck, 
  AlertCircle, 
  Clock, 
  FileText, 
  MessageCircle, 
  Star, 
  HeartHandshake,
  Activity,
  ShieldCheck,
  Stethoscope,
  Pill,
  Smartphone,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t, dir } = useLanguage();

  const problems = [
    { icon: AlertCircle, text: t.problems.rareMeds },
    { icon: MapPin, text: t.problems.multiplePharmacies },
    { icon: Clock, text: t.problems.noReminders },
    { icon: MessageCircle, text: t.problems.limitedConsultations },
    { icon: FileText, text: t.problems.noHealthRecord },
  ];

  const features = [
    {
      icon: Search,
      title: t.solutions.search.title,
      items: [t.solutions.search.desc1, t.solutions.search.desc2, t.solutions.search.desc3, t.solutions.search.desc4],
      color: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      icon: PackageCheck,
      title: t.solutions.delivery.title,
      items: [t.solutions.delivery.desc1, t.solutions.delivery.desc2, t.solutions.delivery.desc3, t.solutions.delivery.desc4],
      color: "bg-emerald-50 text-emerald-600 border-emerald-100"
    },
    {
      icon: Clock,
      title: t.solutions.reminders.title,
      items: [t.solutions.reminders.desc1, t.solutions.reminders.desc2, t.solutions.reminders.desc3],
      color: "bg-amber-50 text-amber-600 border-amber-100"
    },
    {
      icon: FileText,
      title: t.solutions.wallet.title,
      items: [t.solutions.wallet.desc1, t.solutions.wallet.desc2, t.solutions.wallet.desc3],
      color: "bg-purple-50 text-purple-600 border-purple-100"
    },
    {
      icon: Activity,
      title: t.solutions.healthProfile.title,
      items: [t.solutions.healthProfile.desc1, t.solutions.healthProfile.desc2, t.solutions.healthProfile.desc3, t.solutions.healthProfile.desc4],
      color: "bg-rose-50 text-rose-600 border-rose-100"
    },
    {
      icon: Stethoscope,
      title: t.solutions.consultations.title,
      items: [t.solutions.consultations.desc1, t.solutions.consultations.desc2],
      color: "bg-cyan-50 text-cyan-600 border-cyan-100"
    },
    {
      icon: Star,
      title: t.solutions.ratings.title,
      items: [t.solutions.ratings.desc1, t.solutions.ratings.desc2],
      color: "bg-yellow-50 text-yellow-600 border-yellow-100"
    },
    {
      icon: HeartHandshake,
      title: t.solutions.charity.title,
      items: [t.solutions.charity.desc1, t.solutions.charity.desc2, t.solutions.charity.desc3, t.solutions.charity.desc4],
      color: "bg-pink-50 text-pink-600 border-pink-100"
    }
  ];

  const steps = [
    { icon: Search, text: t.howItWorks.step1 },
    { icon: MapPin, text: t.howItWorks.step2 },
    { icon: CreditCard, text: t.howItWorks.step3 },
    { icon: PackageCheck, text: t.howItWorks.step4 },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-100/50 pt-20 pb-32">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/medical/1920/1080?blur=10')] opacity-5 mix-blend-overlay pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-start"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                <ShieldCheck className="h-4 w-4" />
                <span>{t.hero.headline}</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                {t.hero.headline}
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {t.hero.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-semibold text-lg transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  {t.hero.downloadApp}
                </button>
                <Link to="/for-pharmacies" className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-2xl font-semibold text-lg transition-all flex items-center justify-center gap-2">
                  <Pill className="h-5 w-5 text-emerald-600" />
                  {t.hero.registerPharmacy}
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 relative w-full max-w-lg lg:max-w-none"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white">
                <img 
                  src="https://picsum.photos/seed/pharmacy/800/600" 
                  alt="Pharmacy App" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Floating UI Elements */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg flex items-center gap-3">
                  <div className="h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <PackageCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Order Status</p>
                    <p className="text-sm font-bold text-slate-900">Delivered</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.problems.title}</h2>
            <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-all group"
              >
                <div className="h-14 w-14 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <problem.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 leading-snug">{problem.text}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions / Features Section */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.solutions.title}</h2>
            <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col h-full"
              >
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 border ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">{feature.title}</h3>
                <ul className="space-y-3 mt-auto">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.howItWorks.title}</h2>
            <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-full shadow-xl flex items-center justify-center mb-6 relative group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute inset-0 bg-emerald-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                    <step.icon className="h-10 w-10 text-emerald-600" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">{step.text}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Stats Section */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x md:divide-emerald-800 rtl:divide-x-reverse">
            <div className="pt-8 md:pt-0">
              <div className="text-5xl font-black text-emerald-400 mb-2">50K+</div>
              <div className="text-emerald-100 font-medium">{t.trust.stats.users}</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-5xl font-black text-emerald-400 mb-2">1,200+</div>
              <div className="text-emerald-100 font-medium">{t.trust.stats.pharmacies}</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-5xl font-black text-emerald-400 mb-2">100K+</div>
              <div className="text-emerald-100 font-medium">{t.trust.stats.orders}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-8">{t.trust.partners}</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
            {/* Placeholder logos */}
            <div className="text-2xl font-bold font-serif">PharmaCorp</div>
            <div className="text-2xl font-bold font-sans">HealthPlus</div>
            <div className="text-2xl font-bold font-mono">MediCare</div>
            <div className="text-2xl font-bold italic">LifeLine</div>
            <div className="text-2xl font-bold tracking-widest">CureAll</div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.trust.testimonials}</h2>
            <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">
                  "{dir === 'rtl' ? 'تطبيق رائع جداً، ساعدني في العثور على دواء نادر لوالدي في دقائق معدودة. خدمة التوصيل كانت سريعة وممتازة.' : 'Amazing app! It helped me find a rare medication for my father in minutes. The delivery service was fast and excellent.'}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold">
                    {dir === 'rtl' ? 'أ' : 'A'}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{dir === 'rtl' ? 'أحمد محمد' : 'Ahmed Mohamed'}</h4>
                    <p className="text-sm text-slate-500">{dir === 'rtl' ? 'مستخدم' : 'User'}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.trust.faq}</h2>
            <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border border-slate-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {dir === 'rtl' ? 'كيف يمكنني طلب دواء غير متوفر في الصيدليات القريبة؟' : 'How can I order a medicine that is not available in nearby pharmacies?'}
                </h3>
                <p className="text-slate-600">
                  {dir === 'rtl' ? 'يقوم التطبيق بالبحث في شبكة واسعة من الصيدليات، وإذا لم يكن الدواء متوفراً في نطاقك الجغرافي القريب، سيقترح عليك صيدليات أبعد مع خيار التوصيل السريع.' : 'The app searches a wide network of pharmacies. If the medicine is not available in your immediate vicinity, it will suggest further pharmacies with a fast delivery option.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-800 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">{t.hero.headline}</h2>
            <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto relative z-10">
              {t.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-emerald-700 hover:bg-slate-50 rounded-2xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2">
                <Smartphone className="h-5 w-5" />
                {t.hero.downloadApp}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
