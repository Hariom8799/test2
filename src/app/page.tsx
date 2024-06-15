'use client';
import { VariantProvider } from './context/VariantContext';
import VariantForm from './components/VariantForm';
import VariantTable from './components/VariantTable';

const Home = () => {
  return (
    <VariantProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl mb-4">Variant Management</h1>
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="w-full lg:w-1/2">
            <VariantForm />
          </div>
          <div className="w-full lg:w-1/2">
            <VariantTable />
          </div>
        </div>
      </div>
    </VariantProvider>
  );
};

export default Home;
