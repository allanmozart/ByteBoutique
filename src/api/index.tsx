import axios from "axios";
import { BASE_URL, PATH } from "./utils";

export async function getProducts(id: string) {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((response) => console.log(JSON.stringify(response.data)))
    .catch((error) => console.error(error));
}

export const getProductImage = async (id: string) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}${PATH.products}/${id}`,
    headers: {},
  };

  try {
    const response = await axios.request(config);
    return response.data.image;
  } catch (error) {
    console.error(error);
  }
};