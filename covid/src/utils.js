import axios from "axios";

export const getData = async (URL, dataSetter) => {
  const { data } = await axios.get(URL);
  data.sort(compareValues("cases", "desc"));
  // data.sort((a, b) => b.cases - a.cases);
  dataSetter(data);
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
