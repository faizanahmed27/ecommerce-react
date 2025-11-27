import { http } from "./axios-helper"

export const loadProduct=(page, size)=>{
    return http.get(`/ecommorce/api/v1/product/viewAll?pageNumber=${page}&pageSize=${size}`).then(resp => resp.data);
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