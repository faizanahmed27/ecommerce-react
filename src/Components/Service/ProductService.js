import { http } from "./axios-helper"

export const loadProduct=(page, size)=>{
    return http.get(`/ecommorce/api/v1/product/viewAll?pageNumber=${page}&pageSize=${size}`).then(resp => resp.data);
}

export const loadProductWitoutImage=(page, size)=>{
    return http.get(`/ecommorce/api/v1/product/getProductsWithoutImages?pageNumber=${page}&pageSize=${size}`).then(resp => resp.data);
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

// Image Upload (POST Multipart)
export const uploadImage = async (productId, file) => {
  const formData = new FormData();
  formData.append("productImage", file); // ✅ Must match backend @RequestParam name

  const response = await http.post(`/ecommorce/api/v1/product/uploadImage/${productId}`, formData);
  console.log("Response ", response);

  if (response.status !== 200 && response.status !== 202) {  // 202 = ACCEPTED from your controller
    throw new Error("Failed to upload image");
  }
  return response.data;
};