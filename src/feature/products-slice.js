import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";

export const fetchAllProducts= createAsyncThunk('products/fetchAll',async()=>{
    const response = await fetch("https://fakestoreapi.com/products");
     return await response.json();
})

// async function fetchAllProducts() {
//     const result = await response.json();
//     setProducts(result);
// }

const productsSlice = createSlice({
    name: "products",
    initialState: {
        value: []
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAllProducts.pending,(state)=>{
            state.loading =true;
        });
        builder.addCase(fetchAllProducts.fulfilled,(state)=>{
            state.value= action.payload;
            state.loading =false;
        });
    }
})

export default productsSlice.reducer;