import { useContext } from "react";

import { PortfolioContext } from "../../../context/PortfolioContext";
import { PortfolioTableContent } from "./PortfolioTableContent";
import { data } from "../../../api/listingDataMock.json";

const Table = () => {
  const { portfolio } = useContext(PortfolioContext);
  return (
    <>
      {portfolio.length ? (
        <PortfolioTableContent portfolio={portfolio} data={data} />
      ) : (
        <p>No transcations found. Add a new transaction in the button above</p>
      )}
    </>
  );
};

export { Table };
