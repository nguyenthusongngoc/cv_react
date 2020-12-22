import axios from "axios";
import queryString from "query-string";
import { domain } from "../../constant/domain";
export const endpoint = {
  user: "user",
  products: "products",
  cart: "cart",
};

export function createParam(object) {
  return `?${queryString.stringify(object)}`;
}

export default function ApiService(url, method = "GET") {
  return axios({
    method: method,
    url: `${domain}/${url}`,
  }).catch((e) => {
    console.log(e);
  });
}
