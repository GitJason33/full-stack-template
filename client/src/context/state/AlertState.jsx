import { createContext, useState } from 'react';


export const AlertContext = createContext();


export function AlertState(props) {
  const initialState = {
    open: false,
    msg: "Notification alert",
    isError: false,
    timeout: null,
  }
  const [state, setAlert] = useState(initialState);
  

  const Alert = {
    open(err, customMsg = "", timeoutInSec = 10) {
      this.close();

      setAlert({ 
        open: true, 
        msg: err ? err : customMsg, 
        isError: Boolean(err), 
        
        timeout: setTimeout(() => {
          setAlert({ ...initialState });
        }, timeoutInSec * 1000) 
      });
    },
    
    close() {
      if (state.open){ 
        clearTimeout(state.timeout);
        setAlert({ ...initialState });
      }
    },
  }


  return (
    <AlertContext.Provider value={{
      open: state.open,
      msg: state.msg,
      isError: state.isError,

      Alert,
    }}>
      {props.children}
    </AlertContext.Provider>
  );
}
