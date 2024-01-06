import { styled } from "styled-components";

import { THead } from "./THead";
import { TBody } from "./TBody";
import { data } from "../../../api/listingDataMock.json";

const Table = () => {
  return (
    <CriptoTable>
      <THead />
      <TBody data={data} />
    </CriptoTable>
  );
};

const CriptoTable = styled.table`
  border-collapse: collapse;
  tr {
    border-bottom: 1px solid silver;
  }
`;

export { Table };
