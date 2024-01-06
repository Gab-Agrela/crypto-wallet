import { styled } from "styled-components";

import { THead } from "./THead";
import { TBody } from "./TBody";
import {data} from '../../../api/listingDataMock.json'




const Table = () => {
  return (
    <CriptoTable>
      <THead />
      <TBody data={data} />
    </CriptoTable>
  );
};

const CriptoTable = styled.table`
  border: 1px solid red;
  thead {
    font-size: 24px;
  }
  tbody {
    font-size: 20px;
  }
`;

export { Table };
