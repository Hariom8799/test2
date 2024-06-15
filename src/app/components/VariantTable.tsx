'use client';
import { useContext } from 'react';
import { VariantContext } from '../context/VariantContext';

const VariantTable = () => {
  const { variants } = useContext(VariantContext);

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Size</th>
          <th className="py-2 px-4 border-b">Color</th>
          <th className="py-2 px-4 border-b">Price</th>
          <th className="py-2 px-4 border-b">Inventory</th>
        </tr>
      </thead>
      <tbody>
        {variants.map((variant, index) => (
          <tr key={index}>
            <td className="py-2 px-4 border-b">{variant.size}</td>
            <td className="py-2 px-4 border-b">{variant.color}</td>
            <td className="py-2 px-4 border-b">{variant.price}</td>
            <td className="py-2 px-4 border-b">{variant.inventory}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VariantTable;
