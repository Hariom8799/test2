'use client';
import { useState, useContext } from 'react';
import { VariantContext } from '../context/VariantContext';

const VariantForm = () => {
  const { addVariant, addSize, addColor, sizes, colors } = useContext(VariantContext);
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState('');
  const [inventory, setInventory] = useState('');

  const handleVariantSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addVariant({ size, color, price: parseFloat(price), inventory: parseInt(inventory) });
    setSize('');
    setColor('');
    setPrice('');
    setInventory('');
  };

  const handleAddSize = () => {
    if (size && !sizes.includes(size)) {
      addSize(size);
      setSize('');
    }
  };

  const handleAddColor = () => {
    if (color && !colors.includes(color)) {
      addColor(color);
      setColor('');
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleVariantSubmit} className="space-y-4">
        <div>
          <label className="block">Size:</label>
          <select 
            value={size} 
            onChange={(e) => setSize(e.target.value)} 
            className="border p-2 w-full"
          >
            <option value="">Select Size</option>
            {sizes.map((s, index) => (
              <option key={index} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block">Color:</label>
          <select 
            value={color} 
            onChange={(e) => setColor(e.target.value)} 
            className="border p-2 w-full"
          >
            <option value="">Select Color</option>
            {colors.map((c, index) => (
              <option key={index} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block">Price:</label>
          <input 
            type="number" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            className="border p-2 w-full" 
          />
        </div>
        <div>
          <label className="block">Inventory:</label>
          <input 
            type="number" 
            value={inventory} 
            onChange={(e) => setInventory(e.target.value)} 
            className="border p-2 w-full" 
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save</button>
      </form>

      <div className="space-y-4">
        <div>
          <label className="block">Add Size:</label>
          <input 
            type="text" 
            value={size} 
            onChange={(e) => setSize(e.target.value)} 
            className="border p-2 w-full" 
          />
          <button onClick={handleAddSize} className="bg-green-500 text-white p-2 rounded mt-2">Add Size</button>
        </div>
        <div>
          <label className="block">Add Color:</label>
          <input 
            type="text" 
            value={color} 
            onChange={(e) => setColor(e.target.value)} 
            className="border p-2 w-full" 
          />
          <button onClick={handleAddColor} className="bg-green-500 text-white p-2 rounded mt-2">Add Color</button>
        </div>
      </div>
    </div>
  );
};

export default VariantForm;
