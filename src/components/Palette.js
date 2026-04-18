import React from 'react';
import { Heading, Type, Image, FileText } from 'lucide-react';

const TOOLS = [
  { type: 'header', icon: <Heading size={18} />, label: 'Header Block' },
  { type: 'text', icon: <Type size={18} />, label: 'Rich Text' },
  { type: 'image', icon: <Image size={18} />, label: 'Image Element' },
  { type: 'markdown', icon: <FileText size={18} />, label: 'Markdown' },
];

const Palette = ({ onAdd }) => {
  return (
    <div className="p-6 h-full flex flex-col">
      <div className="mb-8 border-b border-gray-800 pb-6">
        <h2 className="text-2xl font-black text-white tracking-tight">DESIGNER<span className="text-red-500">.io</span></h2>
        <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mt-1">Component Library</p>
      </div>

      <div className="space-y-3 flex-1">
        {TOOLS.map((tool) => (
          <button
            key={tool.type}
            onClick={() => onAdd(tool.type)}
            className="w-full flex items-center gap-4 p-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-red-500 hover:bg-gray-800 transition-all group shadow-sm"
          >
            <div className="text-gray-400 group-hover:text-red-500 transition-colors">
              {tool.icon}
            </div>
            <span className="font-semibold text-sm text-gray-200 group-hover:text-white">{tool.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Palette;