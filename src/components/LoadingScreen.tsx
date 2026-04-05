import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-secondary">
      {/* Leaf spinner */}
      <div className="relative w-16 h-16 mb-6">
        <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin-leaf" />
        <span className="absolute inset-0 flex items-center justify-center text-2xl">🌿</span>
      </div>
      <h2 className="font-heading text-xl text-primary tracking-[0.3em] uppercase">
        Tree Aura
      </h2>
      <p className="text-secondary-foreground/60 text-sm mt-2 tracking-widest">Loading your retreat...</p>
    </div>
  );
};

export default LoadingScreen;
