// src/components/BackgroundWrapper.jsx
import React from 'react';

const BackgroundWrapper = ({ children }) => {
  return (
    <div className="bg-[url('/src/assets/background.jpg')] bg-cover bg-fixed bg-opacity-20 min-h-screen">
      <div className="backdrop-blur-sm bg-white/70 min-h-screen">{children}</div>
    </div>
  );
};

export default BackgroundWrapper;
