import { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";

// Order interface
export interface Order {
  id: string;
  number: string;
  status: string;
  paid: number;
  total: number;
  projectId: string;
  shippingAddress: string;
}

interface OrdersContextType {
  orders: Record<string, Order> | null;
  fetchOrders: (projectId: string) => Promise<void>;
  addOrUpdateOrder: (projectId: string, order: Order) => Promise<void>;
  loading: boolean;
}

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const OrdersProvider = ({ children }: Props) => {
  const [orders, setOrders] = useState<Record<string, Order> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchOrders = async (projectId: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/getorders`, {
        params: { projectId },
      });

      console.log('Orders fetched:', response.data); // Confirm this logs your array of orders

      // Convert array to record keyed by id (safer than number)
      const ordersRecord: Record<string, Order> = {};
      response.data.forEach((order: Order) => {
        ordersRecord[order.id] = order;
      });

      setOrders(ordersRecord);
    } catch (error) {
      console.error('Failed to fetch orders:', error);
      setOrders(null);
    } finally {
      setLoading(false);
    }
  };



  const addOrUpdateOrder = async (projectId: string, order: Order) => {
  try {
    await axios.post(`${import.meta.env.VITE_API_URL}/addorder`, {
      ...order,
      projectId,
    });

    setOrders(prev => ({
      ...prev,
      [order.number]: order,
    }));
  } catch (error) {
    console.error("Failed to add/update order:", error);
    throw error;
  }
};


  return (
    <OrdersContext.Provider value={{ orders, fetchOrders, addOrUpdateOrder, loading }}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (!context) throw new Error("useOrders must be used within an OrdersProvider");
  return context;
};
