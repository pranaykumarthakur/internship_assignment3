import React from 'react';
import { Heading, Type, Image, FileText } from 'lucide-react';

const TOOLS = [
  { type: 'header', icon: <Heading size={20} />, label: 'Header' },
  { type: 'text', icon: <Type size={20} />, label: 'Rich Text' },
  { type: 'image', icon: <Image size={20} />, label: 'Image URL' },
  { type: 'markdown', icon: <FileText size={20} />, label: 'Markdown' },
];

const Palette = ({ onAdd }) => {
  return (
    <aside className="w-64 bg-white border-r h-screen p-6 shadow-sm flex flex-col">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Components</h2>
      <div className="space-y-3">
        {TOOLS.map((tool) => (
          <button
            key={tool.type}
            onClick={() => onAdd(tool.type)}
            className="w-full flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-transparent hover:border-red-200 hover:bg-red-50 hover:text-red-600 transition-all group"
          >
            <span className="text-gray-400 group-hover:text-red-500">{tool.icon}</span>
            <span className="font-semibold text-sm">{tool.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Palette;