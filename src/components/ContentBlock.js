import React from 'react';
import { Trash2, ChevronUp, ChevronDown } from 'lucide-react';

const ContentBlock = ({ block, index, onUpdate, onDelete, onMove }) => {
  return (
    <div className="group relative bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
      {/* Control Buttons: Reorder and Delete [cite: 10] */}
      <div className="absolute -left-12 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button onClick={() => onMove(index, -1)} className="p-1 hover:text-red-600"><ChevronUp size={20}/></button>
        <button onClick={() => onMove(index, 1)} className="p-1 hover:text-red-600"><ChevronDown size={20}/></button>
        <button onClick={() => onDelete(block.id)} className="p-1 hover:text-red-600"><Trash2 size={16}/></button>
      </div>

      {/* Conditional Rendering for Block Types [cite: 8, 11] */}
      {block.type === 'header' && (
        <input 
          className="text-3xl font-bold w-full border-none focus:ring-0 p-0"
          value={block.content}
          onChange={(e) => onUpdate(block.id, { content: e.target.value })}
          placeholder="Enter Heading..."
        />
      )}

      {block.type === 'image' && (
        <div className="space-y-3">
          {block.content && <img src={block.content} alt="Preview" className="rounded-lg w-full h-48 object-cover"/>}
          <input 
            className="text-xs text-gray-400 w-full border p-2 rounded"
            value={block.content}
            onChange={(e) => onUpdate(block.id, { content: e.target.value })}
            placeholder="Paste image URL here..."
          />
        </div>
      )}

      {block.type === 'text' && (
        <textarea 
          className="w-full border-none focus:ring-0 text-gray-600 resize-none h-24"
          value={block.content}
          onChange={(e) => onUpdate(block.id, { content: e.target.value })}
          placeholder="Write something..."
        />
      )}
    </div>
  );
};

export default ContentBlock;