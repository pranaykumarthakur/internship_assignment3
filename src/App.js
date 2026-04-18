import React from 'react';
import Palette from './components/Palette';
import Canvas from './components/Canvas';
import { usePageData } from './hooks/usePageData';

function App() {
  const { blocks, addBlock, updateBlock, deleteBlock, moveBlock } = usePageData();

  return (
    <div className="flex h-screen bg-gray-100 font-sans overflow-hidden">
      {/* Sidebar Area */}
      <div className="w-72 bg-gray-900 shadow-2xl z-10 border-r border-gray-800">
        <Palette onAdd={addBlock} />
      </div>
      
      {/* Main Workspace */}
      <main className="flex-1 overflow-y-auto relative bg-[#F8FAFC]">
        {/* Subtle dot pattern background for a technical feel */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#E2E8F0 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.5 }}></div>
        
        <div className="relative z-10 p-12">
          <Canvas 
            blocks={blocks} 
            onUpdate={updateBlock} 
            onDelete={deleteBlock} 
            onMove={moveBlock} 
          />
        </div>
      </main>
    </div>
  );
}

export default App;