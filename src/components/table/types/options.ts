export type option = {
  label: string;
  value: string;
  flex: number;
  item: any[];
  render?: Function;
  field?: string;
};

export type unformattedOption = {
  label: string;
  value: string | string[];
  flex: number;
  item?: any[];
  render?: Function;
  filter?: string;
  sort?: string;
};
