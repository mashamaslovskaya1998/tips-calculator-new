export interface ITip {
  total: number;
  bill: number | string;
  tip: TipOption["value"];
  persons: number | string;
}

export interface TipOption {
  value: number;
  label: string;
}
