import { createContext } from "react";

export type TransactionType = {
  name: string;
  operation: string;
  amount: number;
  price: number;
};

type PortfolioContextType = {
  portfolio: Array<TransactionType>;
  setPortfolio: React.Dispatch<React.SetStateAction<TransactionType[]>>;
};

export const PortfolioContext = createContext({} as PortfolioContextType);
