import React, { useLayoutEffect } from "react";
import store from "./redux";

const StoreContext = React.createContext(store.getState());

export const StoreStateProvider = function ({ children }) {
  const [state, setState] = React.useState(store.getState());

  useLayoutEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    });
  }, []);

  return (
    <StoreContext.Provider value={state}>{children}</StoreContext.Provider>
  );
};

export default StoreContext;
