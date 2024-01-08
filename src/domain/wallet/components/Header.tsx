import { styled } from "styled-components";
import { PortfolioContext } from "../../../context/PortfolioContext";
import { useContext, useEffect, useState } from "react";
import { data } from "../../../api/listingDataMock.json";
import { ApiDataType } from "../../home/components/TBody";

type CurrType = {
  [key: string]: {
    currPrice: number;
    amountBalance: number;
  };
};

const Header = ({ setVisible }: { setVisible: (c: boolean) => void }) => {
  const { portfolio } = useContext(PortfolioContext);
  const [balance, setTotalBalace] = useState<number>(0);

  useEffect(() => {
    const mountObjectWithData = portfolio?.reduce(
      (acc, { amount, name, operation }) => {
        const currCoin = data.find((coin) => coin.name === name) as ApiDataType;
        acc[currCoin.name] = {
          currPrice: acc[currCoin.name]?.currPrice || currCoin.quote.USD.price,
          amountBalance:
            (acc[currCoin.name]?.amountBalance || 0) +
            (operation === "buy" ? +amount : -amount),
        };
        return acc;
      },
      {} as CurrType
    );
    const calculateBalance = Object.entries(mountObjectWithData).reduce(
      (acc, [, { currPrice, amountBalance }]) =>
        acc + currPrice * amountBalance,
      0
    );

    calculateBalance && setTotalBalace(calculateBalance);
  }, [portfolio]);
  return (
    <Container>
      <h1>Portfolio</h1>
      <span>
        <h1>
          {balance.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </h1>
      </span>
      <Button onClick={() => setVisible(true)}>Add Transaction</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 670px;
  span {
    display: flex;
    flex-direction: row;
  }
  @media (max-width: 700px) {
    width: 480px;
    h1 {
      font-size: 20px;
    }
  }
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  background-color: orange;
  color: white;
  padding: 10px;
  font-size: 18px;
  border-radius: 50px 50px;
  border: 1px solid transparent;
  &:hover {
    cursor: pointer;
    border-color: gray;
  }
  @media (max-width: 700px) {
    font-size: 14px;
    padding: 8px;
  }
`;

export { Header };
