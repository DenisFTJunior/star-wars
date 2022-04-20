import { path } from "ramda";

export const sortBy = (data: any[], field: string) => {
  const prop = (x): string =>
    Array.isArray(field) ? path(field, x) : path([field], x);

  return data.slice().sort((a, b) => prop(a).localeCompare(prop(b)));
};
