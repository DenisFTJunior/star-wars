import { DP } from "../types/dp";

export const getBoxShadow = (dp: DP) => {
  switch (dp) {
    case "SOFT":
      return "0px 0px 15px 1px rgba(0,0,0,0.42)";
    case "MEDIUM":
      return "0px 0px 15px 3px rgba(0,0,0,0.42)";
    case "BOLD":
      return "0px 0px 15px 5px rgba(0,0,0,0.42)";
    default:
      return "";
  }
};
