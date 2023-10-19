"use client";
import { createContext, useContext, useState } from "react";

const DynamicElementContext = createContext();

export const DynamicElementProvider = ({ children }) => {
  const state = useState([]);
  return (
    <DynamicElementContext.Provider value={state}>
      {children}
    </DynamicElementContext.Provider>
  );
};

export const useDynamicElement = () => {
  const value = useContext(DynamicElementContext);
  if (!value) throw error("useDynamicElement must be inside it's provider");
  return value;
};
