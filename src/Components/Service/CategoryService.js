import { http } from "./axios-helper"

export const loadCategory=()=>{

    return http.get(`/ecommorce/api/v1/category/getAll`).then(response => response.data);
}