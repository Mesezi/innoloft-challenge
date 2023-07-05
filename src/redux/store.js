import { configureStore } from '@reduxjs/toolkit';
import productSliceReducer from './slices/productSlice'
import configurationReducer from './slices/configurationSlice'


const store = configureStore({
  reducer: {
    product: productSliceReducer,
    configuration: configurationReducer
  },
  devTools: true,
});


export default store;