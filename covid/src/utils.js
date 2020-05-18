import axios from "axios";
import { key } from "./secret-keys/newsAPI";

export const getData = async (URL, callback, sortOptions = null) => {
  const { data } = await axios.get(URL);
  if (sortOptions) data.sort(compareValues(sortOptions.key, sortOptions.order));
  // data.sort(compareValues("cases", "desc"));
  // data.sort((a, b) => b.cases - a.cases);
  callback(data);
};

export const compareValues = (key, order = "asc") => {
  return (a, b) => {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;

    const tempA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const tempB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (tempA > tempB) comparison = 1;
    if (tempB > tempA) comparison = -1;

    return order === "desc" ? comparison * -1 : comparison;
  };
};

export const getKeyByValue = (object, value) =>
  Object.keys(object).find((key) => object[key] === value);

export const getNewsLink = () => {
  const params = {
    q: "covid",
    sortBy: "publishedAt",
    language: "en",
    apiKey: key,
  };
  const APILink = "https://newsapi.org/v2/everything";
  const query = Object.keys(params)
    .map((key) => key + "=" + params[key])
    .join("&");
  return [APILink, query].join("?");
};
