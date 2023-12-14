import { createContext, useState } from "react";


export const LoadingContext = createContext();


export const LoadingState = ({ children }) => {
  const initialState = false;
  const [isLoading, setLoading] = useState(initialState);



  const startLoading = () => {
    setLoading(true);
  } 



  const stopLoading = () => {
    setLoading(initialState);
  }


  return (
    <LoadingContext.Provider value={{ 
      isLoading, 
      
      stopLoading,
      startLoading
    }}>
      {children}
    </LoadingContext.Provider>
  )
}
