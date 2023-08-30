import React from "react";

export type ContextType = {
  count: number;
  start: number;
  lengthArr:number;
  arrowRight: () => void;
  arrowLeft: () => void;
};
export const defaulValue: ContextType = {
  count: 0,
  start: 0,
  lengthArr:0,
  arrowRight: (): void => {},
  arrowLeft: (): void => {},
};

export const Context = React.createContext(defaulValue);
