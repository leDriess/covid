import axios from "axios";

export const getData = async (URL) => {
  const { data } = await axios.get(URL);
  return data;
};
