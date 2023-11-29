import axios from 'axios';
import { BASE_URL, PATH } from './utils';

export async function getCategoryProducts(category: string) {
  const config = {
    method: 'get',
    url: `${BASE_URL}${PATH.category}/${category}`,
    headers: {},
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllCategories() {
  const config = {
    method: 'get',
    url: `${BASE_URL}${PATH.categories}`,
    headers: {},
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const getProduct = async (id: string) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}${PATH.products}/${id}`,
    headers: {},
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};