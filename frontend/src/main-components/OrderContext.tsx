import { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";
import { Order } from './interfaces';

interface OrdersContextType {
  orders: Record<string, Order> | null;
  fetchOrders: (projectId: string) => Promise<void>;
  updateAddress: (projectId: string, address: string) => Promise<void>;
  loading: boolean;
  prototype: Order | null;
  fetchPrototype: (projectId: string) => Promise<void>;
}

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const OrdersProvider = ({ children }: Props) => {
  const [orders, setOrders] = useState<Record<string, Order> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [prototype, setPrototype] = useState<Order | null>(null);

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

  const fetchPrototype = async (projectId: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/getprototype`, {
        params: { projectId },
      });

      console.log('Prototype fetched:', response.data); // Confirm this logs your array of orders

      setPrototype(response.data);
    } catch (error) {
      console.error('Failed to fetch prototype:', error);
      setPrototype(null);
    } finally {
      setLoading(false);
    }
  };

  const updateAddress = async (orderId: string, address: string) => {
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/updateaddress?orderId=${orderId}`, {
        shippingAddress: address
      });
    } catch (error) {
      console.error("Failed to add/update order:", error);
      throw error;
    }
  };


  return (
    <OrdersContext.Provider value={{ orders, fetchOrders, updateAddress, loading, prototype, fetchPrototype }}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (!context) throw new Error("useOrders must be used within an OrdersProvider");
  return context;
};
