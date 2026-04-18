import { useState, useEffect } from 'react';

export const usePageData = () => {
  const [blocks, setBlocks] = useState(() => {
    // Persistence: Load from local storage immediately [cite: 12]
    const saved = localStorage.getItem('builder-data');
    return saved ? JSON.parse(saved) : [];
  });

  // Persistence: Save every time blocks change [cite: 12]
  useEffect(() => {
    localStorage.setItem('builder-data', JSON.stringify(blocks));
  }, [blocks]);

  const addBlock = (type) => {
    const newBlock = { 
      id: `id-${Date.now()}`, 
      type, 
      content: '', 
      config: { level: 'h2' } // Default config [cite: 11]
    };
    setBlocks([...blocks, newBlock]);
  };

  const updateBlock = (id, updates) => {
    setBlocks(blocks.map(b => b.id === id ? { ...b, ...updates } : b));
  };

  const deleteBlock = (id) => setBlocks(blocks.filter(b => b.id !== id));

  // Simple reordering logic (impressive without needing complex libraries) [cite: 10]
  const moveBlock = (index, direction) => {
    const newBlocks = [...blocks];
    const target = index + direction;
    if (target < 0 || target >= blocks.length) return;
    [newBlocks[index], newBlocks[target]] = [newBlocks[target], newBlocks[index]];
    setBlocks(newBlocks);
  };

  return { blocks, addBlock, updateBlock, deleteBlock, moveBlock };
};