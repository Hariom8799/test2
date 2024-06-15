'use client';
import { VariantProvider } from './context/VariantContext';
import VariantForm from './components/VariantForm';
import VariantTable from './components/VariantTable';

const Home = () => {
  return (
    <VariantProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Variants</h1>
        <VariantForm />
        <VariantTable />
      </div>
    </VariantProvider>
  );
};

export default Home;
