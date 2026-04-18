import React from 'react';
import ContentBlock from './ContentBlock';

const Canvas = ({ blocks, onUpdate, onDelete, onMove }) => {
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight italic uppercase">My Personal Page</h1>
        <span className="text-[10px] font-bold bg-green-100 text-green-700 px-3 py-1 rounded-full uppercase tracking-widest">
          Saved 
        </span>
      </div>

      {blocks.length === 0 ? (
        <div className="h-64 border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center text-gray-400">
          <p className="italic">Click a block from the palette to begin </p>
        </div>
      ) : (
        blocks.map((block, index) => (
          <ContentBlock 
            key={block.id}
            block={block}
            index={index}
            onUpdate={onUpdate}
            onDelete={onDelete}
            onMove={onMove}
          />
        ))
      )}
    </div>
  );
};

export default Canvas;