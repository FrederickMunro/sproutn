import { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";

interface Option {
  name: string;
  number: number;
  description: string;
  available: boolean;
  status: boolean;
}

interface OptionsContextType {
  options: Record<string, Option> | null;
  addOrUpdateOptions: (projectId: string, options: Record<string, Option>) => Promise<void>;
  fetchOptions: (projectId: string) => Promise<void>;
  loading: boolean;
}

const OptionsContext = createContext<OptionsContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const OptionsProvider = ({ children }: Props) => {
  const [options, setOptions] = useState<Record<string, Option> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchOptions = async (projectId: string) => {
    setLoading(true);
    try {
      console.log('got options', projectId);
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/getoptions`, {
        params: { projectId },
      });
      setOptions(response.data.options);
      console.log('got options', response.data.options);
    } catch (error) {
      console.error("Error fetching options:", error);
      setOptions(null);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const addOrUpdateOptions = async (projectId: string, optionsToSave: Record<string, Option>) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/addoptions`, {
        projectId,
        options: optionsToSave,
      });
      setOptions(optionsToSave);
    } catch (error) {
      console.error("Failed to add/update options:", error);
      throw error;
    }
  };

  return (
    <OptionsContext.Provider value={{ options, addOrUpdateOptions, fetchOptions, loading }}>
      {children}
    </OptionsContext.Provider>
  );
};

export const useOptions = () => {
  const context = useContext(OptionsContext);
  if (!context) throw new Error("useOptions must be used within an OptionsProvider");
  return context;
};