import axios from "axios";

export async function fetchAllData(): Promise<any> {
  // changes limit from 30 to 100, feature is within axios.get
  const { data } = await axios.get(`https://dummyjson.com/products/`, {
    params: {
      limit: 100,
    },
  });
  return data.products;
}


export async function fetchCategoryByName(inputValue: string) {
  const { data } = await axios.get(
    `https://dummyjson.com/products/category/${inputValue}`
  );
  return data;
}
