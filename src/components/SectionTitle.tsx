import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, light = false }) => {
  return (
    <div className="text-center mb-12">
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-black' : 'text-white'}`}>
        {title}
      </h2>
      <p className={`text-xl ${light ? 'text-gray-700' : 'text-gray-300'} max-w-3xl mx-auto`}>
        {subtitle}
      </p>
      <div className="w-24 h-1 bg-blue-800 mx-auto mt-6"></div>
    </div>
  );
};

export default SectionTitle;