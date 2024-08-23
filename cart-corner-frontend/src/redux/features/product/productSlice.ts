import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  data: {
    id: number;
    name: string;
    images: string;
    description?: string;
    price: string | number;
    discount?: string | number;
    categoryId?: string | number;
    brandId?: string | number;
    deletedAt?: string | null;
    createdAt?: string;
    updatedAt?: string;
    category?: any;
    brand?: any;
  };
  cart_count:number
}
interface ProductState {
  productCart: Product[];
}
const initialState: ProductState = {
  productCart: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    storeCart: (state, action: PayloadAction<Product>) => {
      state.productCart.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeCart } = productSlice.actions;

export default productSlice.reducer;
