import { useEffect, useState } from "react";
import { TransactionType } from "../../../context/PortfolioContext";
import { ApiDataType } from "../../home/components/TBody";
import { styled } from "styled-components";

type AccType = {
  [key: string]: {
    amount: number;
    amountBuyed: number;
    totalSpent: number;
  };
};

type PortfolioCalculatedType = {
  name: string;
  amount: number;
  value: number;
  gainLoss: number;
  percentage: number;
  currPrice: number;
};

const PortfolioTableContent = ({
  portfolio,
  data,
}: {
  portfolio: Array<TransactionType>;
  data: Array<ApiDataType>;
}) => {
  const [portfolioCalculated, setPorfolioCalculated] =
    useState<Array<PortfolioCalculatedType>>();

  useEffect(() => {
    const mountGroupedTransactions = portfolio.reduce(
      (acc, { name, amount, operation, price }) => {
        acc[name] = {
          amount:
            (acc[name]?.amount || 0) + (operation === "buy" ? amount : -amount),
          amountBuyed:
            (acc[name]?.amountBuyed || 0) + (operation === "buy" ? amount : 0),
          totalSpent:
            (acc[name]?.totalSpent || 0) +
            (operation === "buy" ? amount * price : 0),
        };
        return acc;
      },
      {} as AccType
    );
    const calculatePorfolio = Object.entries(mountGroupedTransactions).map(
      ([name, { amount, amountBuyed, totalSpent }]: [
        string,
        { amount: number; amountBuyed: number; totalSpent: number }
      ]) => {
        const coin = data.find((coin) => coin.name === name) as ApiDataType;
        const currPrice = coin.quote.USD.price;
        const avgPrice = totalSpent / amountBuyed;
        return {
          name,
          amount,
          value: amount * currPrice,
          gainLoss: amount * currPrice - avgPrice * amount,
          percentage: Math.round((currPrice / avgPrice - 1) * 100),
          currPrice,
        };
      }
    );
    setPorfolioCalculated(calculatePorfolio);
  }, [data, portfolio]);

  return (
    <Table>
      <THead>
        <tr>
          <th>Currency</th>
          <th>Amount</th>
          <th>Price</th>
          <th>Gain/Loss</th>
          <th>%</th>
          <th>Curr. Price</th>
        </tr>
      </THead>
      <TBody>
        {portfolioCalculated?.map((curr, index) =>
          curr.amount ? (
            <tr key={curr.name + index}>
              <td>{curr.name}</td>
              <td>{curr.amount}</td>
              <td>
                {curr.value.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
              <td className={curr.gainLoss >= 0 ? "positive" : "negative"}>
                {curr.gainLoss.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
              <td className={curr.percentage >= 0 ? "positive" : "negative"}>
                {curr.percentage.toFixed(2) + "%"}
              </td>
              <td>
                {curr.currPrice.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
            </tr>
          ) : (
            <tr></tr>
          )
        )}
      </TBody>
    </Table>
  );
};

const THead = styled.thead`
  font-size: 20px;
  @media (max-width: 700px) {
    font-size: 18px;
  }
`;

const TBody = styled.tbody`
  td {
    padding: 10px 20px;
    font-size: 20px;
  }
  @media (max-width: 700px) {
    td {
      padding: 5px 10px;
      font-size: 14px;
    }
  }
  .positive {
    color: green;
  }
  .negative {
    color: red;
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  tr {
    border-bottom: 1px solid silver;
  }
`;

export { PortfolioTableContent };
