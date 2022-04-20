import { dropRepeats } from "ramda";

import { filterBy } from "../../../services/filter/filterBy";
import { sortBy } from "../../../services/sort/sortBy";

const formatData = (filter, sort, data) => {
  if (filter) {
    const filteredByHair = filterBy("hairColor", data, filter);

    const filteredByEye = filterBy("eyeColor", data, filter);
    const filteredByHomeWorld = filterBy(["planet", "name"], data, filter);

    return filteredByHair.length > 0
      ? filteredByHair
      : filteredByEye.length > 0
      ? filteredByEye
      : filteredByHomeWorld.length > 0
      ? filteredByHomeWorld
      : [];
  }

  if (sort) return sortBy(data, sort);

  return data;
};

export default formatData;
