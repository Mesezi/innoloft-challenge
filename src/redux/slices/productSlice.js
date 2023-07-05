import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Define the async thunk
export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (productId) => {
    try {
      const response = await fetch(`https://api-test.innoloft.com/product/${productId}/`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch product.');
    }
  }
);


const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    editDescription:(state, action )=>{
      state.data.description = action.payload
    },
    editTitle:(state, action )=>{
      state.data.name = action.payload
    },
    editYoutube:(state, action )=>{
      state.data.video = action.payload
    },
    editCategory:(state, action )=>{
      state.data.categories[state.data.categories.findIndex(el=> el.id === action.payload[1])] = {id:action.payload[1], name:action.payload[0] }
      // using id from payload array getIndex of item from store and reassign with new value
  },
  editBusinessModels:(state, action )=>{
    state.data.businessModels[state.data.businessModels.findIndex(el=> el.id === action.payload[1])] = {id:action.payload[1], name:action.payload[0] }
   },
   editTrl:(state, action )=>{
    console.log(action.payload)
    state.data.trl = action.payload
   }
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { editDescription, editTitle, editYoutube,
   editCategory, editBusinessModels,editTrl } = productSlice.actions;

export default productSlice.reducer;
