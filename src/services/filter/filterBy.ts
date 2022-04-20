import { path } from "ramda";

export const filterBy = (field, data, filter) => {
  const itemProp = (item): string =>
    Array.isArray(field) ? path(field, item) : path([field], item);
  const filterRegex = new RegExp(`[${filter}]`);

  return data.filter((item) => itemProp(item).match(filterRegex));
};
