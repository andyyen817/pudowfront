import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col font-sans bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-24">
         <div className="absolute inset-0 z-0 overflow-hidden">
             <img
               src="https://placehold.co/1920x800/111827/ffffff?text=About+AirKOP"
               alt="About Us Hero"
               className="w-full h-full object-cover opacity-40"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90"></div>
         </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">{t('navbar.about')}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              AirKOP is dedicated to revolutionizing access to clean water while empowering communities through sustainable social entrepreneurship.
            </p>
         </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                <div>
                     <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                     <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        To improve drinking water quality for everyone while creating sustainable employment opportunities and increasing income for community members, especially women.
                     </p>
                     <p className="text-lg text-gray-600 leading-relaxed">
                        We believe that access to clean water is a fundamental human right, and that local communities are best positioned to manage this resource effectively.
                     </p>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img
                      src="https://placehold.co/600x400/e2e8f0/1e293b?text=Mission+Image"
                      alt="Our Mission"
                      className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Strategic Partners */}
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Strategic Partners</h2>
                <div className="flex flex-wrap justify-center gap-12 items-center grayscale hover:grayscale-0 transition-all duration-500">
                     <img src="https://placehold.co/150x80/f1f5f9/64748b?text=INDUK+KUD" alt="Induk KUD" className="h-20 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                     {/* Add more partner logos here */}
                </div>
            </div>

             {/* Core Values */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="bg-blue-50 p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
                     <h3 className="text-xl font-bold text-blue-900 mb-4">Quality First</h3>
                     <p className="text-blue-700">Adhering to strict international standards (ISO9001) to ensure every drop is safe.</p>
                 </div>
                 <div className="bg-green-50 p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
                     <h3 className="text-xl font-bold text-green-900 mb-4">Community Focused</h3>
                     <p className="text-green-700">Building systems that directly benefit local economies and families.</p>
                 </div>
                 <div className="bg-purple-50 p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
                     <h3 className="text-xl font-bold text-purple-900 mb-4">Innovation</h3>
                     <p className="text-purple-700">Leveraging smart technology for efficient water management and distribution.</p>
                 </div>
             </div>

        </div>
      </div>
    </div>
  );
};

export default About;

