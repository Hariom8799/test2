'use client';
import { createContext, useState, ReactNode } from 'react';

interface Variant {
  size: string;
  color: string;
  price: number;
  inventory: number;
}

interface VariantContextProps {
  variants: Variant[];
  sizes: string[];
  colors: string[];
  addVariant: (variant: Variant) => void;
  addSize: (size: string) => void;
  addColor: (color: string) => void;
}

export const VariantContext = createContext<VariantContextProps>({
  variants: [],
  sizes: ["extra small", "small", "medium", "large", "extra large"],
  colors: [],
  addVariant: () => {},
  addSize: () => {},
  addColor: () => {},
});

export const VariantProvider = ({ children }: { children: ReactNode }) => {
  const [variants, setVariants] = useState<Variant[]>([]);
  const [sizes, setSizes] = useState<string[]>(["extra small", "small", "medium", "large", "extra large"]);
  const [colors, setColors] = useState<string[]>([]);

  const addVariant = (variant: Variant) => {
    setVariants([...variants, variant]);
  };

  const addSize = (size: string) => {
    setSizes([...sizes, size]);
  };

  const addColor = (color: string) => {
    setColors([...colors, color]);
  };

  return (
    <VariantContext.Provider value={{ variants, sizes, colors, addVariant, addSize, addColor }}>
      {children}
    </VariantContext.Provider>
  );
};
