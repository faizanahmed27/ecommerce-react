import { http } from "./axios-helper"

export const loadProduct=()=>{
    return http.get(`/ecommorce/api/v1/product/viewAll?pageNumber=0&pageSize=10`).then(resp => resp.data);
}

// Get products by category
export const loadProductByCategory = async (categoryId) => {
  const response = await http.get(`/ecommorce/api/v1/product/getProductByCategory/${categoryId}`);
  console.log("Response ", response);
  
  if (response.status!=200) {
    throw new Error("Failed to fetch products");
  }
  return response.data;
};