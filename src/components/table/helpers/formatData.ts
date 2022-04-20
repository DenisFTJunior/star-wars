import { filterBy } from "../../../services/filter/filterBy";
import { sortBy } from "../../../services/sort/sortBy";

const formatData = (filter, sort, data) => {
  if (filter) {
    const filteredByHair = filterBy("hairColor", data, filter);
    if (filteredByHair.lenght > 0) return filteredByHair;

    const filteredByEye = filterBy("eyeColor", data, filter);
    if (filteredByEye.lenght > 0) return filteredByEye;

    const filteredByHomeWorld = filterBy(["planet", "name"], data, filter);
    if (filteredByHomeWorld.lenght > 0) return filteredByHomeWorld;
  }
  if (sort) return sortBy(data, sort);

  return data;
};

export default formatData;
