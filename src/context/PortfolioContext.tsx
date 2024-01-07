import { createContext } from "react";

export type TransactionType = {
  currency: string;
  operation: string;
  amount: number;
  quantity: number;
};

type PortfolioContextType = {
  portfolio: Array<TransactionType>;
  setPortfolio: React.Dispatch<React.SetStateAction<TransactionType[]>>;
};

export const PortfolioContext = createContext({} as PortfolioContextType);
