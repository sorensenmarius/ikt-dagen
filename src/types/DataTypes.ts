import Company from "./Company";

export interface IContext {
  companies: Company[];
}

export interface ISheetsResponse {
  majorDimension: string;
  range: string;
  values: string[][];
}
