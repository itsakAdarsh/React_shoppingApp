import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ProductDataProvider = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "http://localhost:8000/products";
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ProductDataProvider.Provider value={data}>
      {children}
    </ProductDataProvider.Provider>
  );
};

export const useData = () => {
  return useContext(ProductDataProvider);
};
