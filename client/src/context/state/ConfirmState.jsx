import { createContext, useState } from "react";


export const ConfirmContext = createContext();


export const ConfirmState = ({ children }) => {
  const initialState = {
    open: false, 
    msg: "Are you sure?",
    callback_OK: () => console.log("confirm?")
  }
  const [confirm, setConfirm] = useState(initialState);



  const closeConfirm = () => {
    setConfirm({ ...initialState });
  } 
  


  const openConfirm = (msg, callback_OK) => {
    setConfirm({ open: true, msg, callback_OK });
  }


  return (
    <ConfirmContext.Provider value={{ 
      confirm, 
      
      openConfirm,
      closeConfirm
    }}>
      {children}
    </ConfirmContext.Provider>
  )
}
