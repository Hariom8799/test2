import { useContext, useState } from 'react';
import { VariantContext } from '../context/VariantContext';

const VariantTable = () => {
  const { variants } = useContext(VariantContext);
  const [groupBy, setGroupBy] = useState('size');

  const groupedVariants = variants.reduce((acc, variant) => {
    const key = variant[groupBy];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(variant);
    return acc;
  }, {});

  return (
    <div>
      <div className="mb-4">
        <label className="block">Group by:</label>
        <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)} className="border p-2 w-full">
          <option value="size">Size</option>
          <option value="color">Color</option>
        </select>
      </div>

      {Object.keys(groupedVariants).map((key, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-bold">{key} ({groupedVariants[key].length} variants)</h3>
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
              {groupedVariants[key].map((variant, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{variant.size}</td>
                  <td className="py-2 px-4 border-b">{variant.color}</td>
                  <td className="py-2 px-4 border-b">${variant.price.toFixed(2)}</td>
                  <td className="py-2 px-4 border-b">{variant.inventory}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default VariantTable;
