import React from 'react';
import { Trash2, ChevronUp, ChevronDown } from 'lucide-react';

const Canvas = ({ blocks, onUpdate, onDelete, onMove }) => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-6">
      <header className="mb-8 flex justify-between items-end bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">My Personal Page</h1>
          <p className="text-gray-400 mt-2 text-sm font-medium">Compose your layout below.</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-green-700 bg-green-50 px-4 py-2 rounded-full border border-green-200">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          SAVED
        </div>
      </header>

      {blocks.length === 0 ? (
        <div className="h-64 border-2 border-dashed border-gray-300 rounded-3xl flex flex-col items-center justify-center text-gray-500 bg-white/50 backdrop-blur-sm">
          <p className="font-medium">Canvas is empty</p>
          <p className="text-sm">Click a component in the library to start.</p>
        </div>
      ) : (
        blocks.map((block, index) => (
          <div key={block.id} className="group relative bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
            
            {/* Reorder & Delete Controls */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity bg-white border border-gray-200 rounded-lg shadow-sm p-1 z-20">
              <button onClick={() => onMove(index, -1)} className="p-1.5 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded"><ChevronUp size={16}/></button>
              <button onClick={() => onMove(index, 1)} className="p-1.5 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded"><ChevronDown size={16}/></button>
              <div className="h-px bg-gray-200 my-1"></div>
              <button onClick={() => onDelete(block.id)} className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded"><Trash2 size={16}/></button>
            </div>

            {/* Block Content Inputs */}
            {block.type === 'image' && (
              <div className="space-y-4">
                {block.content ? (
                  <img src={block.content} alt="Content" className="w-full rounded-xl object-cover shadow-sm border border-gray-100" />
                ) : (
                  <div className="h-32 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 text-sm italic">Image Preview Area</div>
                )}
                <input 
                  className="w-full text-sm border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-gray-900 outline-none transition-all"
                  value={block.content}
                  onChange={(e) => onUpdate(block.id, { content: e.target.value })}
                  placeholder="Paste image URL here..."
                />
              </div>
            )}
            
            {/* Add your other block type conditions (header, text) here matching this styling */}
            {block.type === 'header' && (
              <input 
                className="w-full border-none focus:ring-0 text-3xl font-bold p-0 text-gray-900 outline-none placeholder-gray-300"
                value={block.content}
                onChange={(e) => onUpdate(block.id, { content: e.target.value })}
                placeholder="Enter Heading..."
              />
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Canvas;