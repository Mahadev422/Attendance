import React from 'react';

const SpinLoader = () => {

  return (
    <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-blue-500"></div>
    </div>
  );
};

export default SpinLoader;
