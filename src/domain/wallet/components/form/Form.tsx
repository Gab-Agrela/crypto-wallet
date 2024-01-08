import { useContext } from "react";
import { styled } from "styled-components";

import { Header } from "./FormHeader";
import { Body } from "./FormBody";
import {
  PortfolioContext,
  TransactionType,
} from "../../../../context/PortfolioContext";

export type FormParamsType = {
  visible: boolean;
  setVisible: (c: boolean) => void;
};

const Form = ({ visible, setVisible }: FormParamsType) => {
  const { setPortfolio } = useContext(PortfolioContext);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = event.currentTarget.elements;
    const [, name, buy, , amount, price] = [...data].map(
      (d) => d as HTMLSelectElement | HTMLInputElement
    );
    const transaction: TransactionType = {
      name: name.value,
      operation: (buy as HTMLInputElement).checked ? "buy" : "sell",
      amount: Number(amount.value),
      price: Number(price.value),
    };
    setPortfolio((prev) => [...prev, transaction]);
    setVisible(false);
  };
  return (
    <>
      {visible ? (
        <ModalContainer>
          <FormContainer name="portfolio" onSubmit={handleSubmit}>
            <Header setVisible={setVisible} />
            <Body />
          </FormContainer>
        </ModalContainer>
      ) : (
        <></>
      )}
    </>
  );
};

const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  direction: row;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 20%;
  height: 30%;
  background-color: silver;
`;

export { Form };
