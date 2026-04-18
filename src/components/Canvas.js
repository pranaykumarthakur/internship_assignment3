import React from 'react';
import { Trash2, ChevronUp, ChevronDown, GripVertical } from 'lucide-react';

const Canvas = ({ blocks, onUpdate, onDelete, onMove }) => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-6 pb-20">
      {/* Premium Header Card */}
      <header className="mb-6 flex justify-between items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
        {/* Subtle decorative gradient line at the top of the card */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-400"></div>
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">My Personal Page</h1>
          <p className="text-gray-400 mt-1 text-sm font-medium">Drag, drop, and configure your layout below.</p>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold text-green-700 bg-green-50 px-3 py-1.5 rounded-full border border-green-200 uppercase tracking-widest shadow-sm">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          Auto-Saved
        </div>
      </header>

      {/* Empty Canvas State */}
      {blocks.length === 0 ? (
        <div className="h-72 border-2 border-dashed border-gray-300 rounded-3xl flex flex-col items-center justify-center text-gray-400 bg-white/40 backdrop-blur-sm transition-all hover:border-red-300 hover:bg-white/60">
          <div className="p-4 bg-white rounded-full shadow-sm mb-3">
            <GripVertical size={24} className="text-gray-300" />
          </div>
          <p className="font-semibold text-gray-600">Your canvas is a blank slate</p>
          <p className="text-sm mt-1">Select a component from the library to begin.</p>
        </div>
      ) : (
        /* Rendered Blocks */
        blocks.map((block, index) => (
          <div key={block.id} className="group relative bg-white border border-gray-200 p-1 rounded-2xl shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-200 flex items-start gap-2">
            
            {/* Left-side Control Bar (Only visible on hover for a cleaner UI) */}
            <div className="flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-gray-50 rounded-xl border border-gray-100 my-auto ml-1">
              <button onClick={() => onMove(index, -1)} className="p-1 text-gray-400 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"><ChevronUp size={16}/></button>
              <div className="h-px w-full bg-gray-200"></div>
              <button onClick={() => onMove(index, 1)} className="p-1 text-gray-400 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"><ChevronDown size={16}/></button>
              <div className="h-px w-full bg-gray-200"></div>
              <button onClick={() => onDelete(block.id)} className="p-1 text-red-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"><Trash2 size={16}/></button>
            </div>

            {/* Main Block Content Area */}
            <div className="flex-1 p-5 pl-2">
              
              {/* IMAGE BLOCK */}
              {block.type === 'image' && (
                <div className="space-y-4">
                  {block.content ? (
                    <img src={block.content} alt="Content" className="w-full h-auto max-h-96 rounded-xl object-cover shadow-sm border border-gray-100" />
                  ) : (
                    <div className="h-40 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 text-sm">
                      <span className="font-medium">Image Preview Area</span>
                      <span className="text-xs text-gray-300 mt-1">Paste a URL below to render</span>
                    </div>
                  )}
                  <input 
                    className="w-full text-sm border border-gray-200 bg-gray-50 p-3 rounded-xl focus:bg-white focus:border-red-400 focus:ring-4 focus:ring-red-50 outline-none transition-all placeholder-gray-400 text-gray-700"
                    value={block.content}
                    onChange={(e) => onUpdate(block.id, { content: e.target.value })}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              )}
              
              {/* HEADER BLOCK */}
              {block.type === 'header' && (
                <input 
                  className="w-full border-none bg-transparent focus:ring-0 text-4xl font-black p-0 text-gray-900 outline-none placeholder-gray-200 transition-colors"
                  value={block.content}
                  onChange={(e) => onUpdate(block.id, { content: e.target.value })}
                  placeholder="Type a main heading..."
                />
              )}

              {/* TEXT / MARKDOWN BLOCK */}
              {(block.type === 'text' || block.type === 'markdown') && (
                <textarea 
                  className="w-full border-none bg-transparent focus:ring-0 text-lg text-gray-600 outline-none placeholder-gray-300 resize-none min-h-[100px] leading-relaxed"
                  value={block.content}
                  onChange={(e) => onUpdate(block.id, { content: e.target.value })}
                  placeholder={block.type === 'markdown' ? "Type markdown code here..." : "Start typing your paragraph here..."}
                />
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Canvas;