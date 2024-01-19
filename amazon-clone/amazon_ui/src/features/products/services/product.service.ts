import axios from "axios"
import { ProductDocument } from "../models/Product"
import { REACT_APP_BASE_API } from "../../../constant/endpoints"

const getProducts = async () => {
  const response = await axios.get<ProductDocument[]>(`${REACT_APP_BASE_API}/product`)
  return response
}

const productService = {
  getProducts
}

export default productService