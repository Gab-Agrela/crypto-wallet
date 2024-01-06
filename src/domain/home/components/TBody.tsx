import { ReactElement } from "react";

interface TApiData {
  id?: number;
  name: string;
  symbol?: string;
  slug?: string;
  infinite_supply?: boolean;
  cmc_rank: number;
  self_reported_circulating_supply: unknown;
  self_reported_market_cap: unknown;
  tvl_ratio?: unknown;
  last_updated?: string;
  quote: {
    USD: {
      price: number;
      volume_24h?: number;
      volume_change_24h?: number;
      percent_change_1h?: number;
      percent_change_24h: number;
      percent_change_7d?: number;
      percent_change_30d?: number;
      percent_change_60d?: number;
      percent_change_90d?: number;
      market_cap: number;
      market_cap_dominance?: number;
      fully_diluted_market_cap?: number;
      tvl?: unknown;
      market_cap_by_total_supply?: number;
      last_updated?: string;
    };
  };
}

const TBodyTr = ({ cmc_rank, name, quote }: TApiData): ReactElement => {
  return (
    <tr key={cmc_rank}>
      <td>{cmc_rank}</td>
      <td>{name}</td>
      <td>
        {quote.USD.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </td>
      <td>{quote.USD.percent_change_24h.toFixed(2) + "%"}</td>
      <td>
        {quote.USD.market_cap.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </td>
    </tr>
  );
};

const TBody = ({ data }: { data: Array<TApiData> }): ReactElement => {
  return <tbody>{data?.map((curr: TApiData) => TBodyTr(curr))}</tbody>;
};

export { TBody };
