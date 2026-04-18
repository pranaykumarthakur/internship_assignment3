import React from 'react';
import Palette from './components/Palette';
import Canvas from './components/Canvas';
import { usePageData } from './hooks/usePageData';

function App() {
  const { blocks, addBlock, updateBlock, deleteBlock, moveBlock } = usePageData();

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      <Palette onAdd={addBlock} />
      <main className="flex-1 overflow-y-auto p-12">
        <Canvas 
          blocks={blocks} 
          onUpdate={updateBlock} 
          onDelete={deleteBlock} 
          onMove={moveBlock} 
        />
      </main>
    </div>
  );
}

export default App;