import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  saleProRes: [],
  saleProCom: [],
  rentProRes: [],
  rentProCom: [],
  allProducts: [],
  searchProducts: [],
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setRentProCom: (state, action) => {
      state.rentProCom = action.payload;
    },
    setProductSearch: (state, action) => {
      state.searchProducts = action.payload;
    },
    setRentProRes: (state, action) => {
      state.rentProRes = action.payload;
    },
    setSaleProCom: (state, action) => {
      state.saleProCom = action.payload;
    },
    setSaleProRes: (state, action) => {
      state.saleProRes = action.payload;
    },
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRentProCom, setRentProRes, setSaleProCom, setSaleProRes, setProductSearch, setAllProducts } = ProductSlice.actions;

export default ProductSlice.reducer;
