import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the async thunk
export const fetchConfiguration = createAsyncThunk(
  'configuration/fetch',
  async (thunkAPI) => {
    try {
      const response = await fetch(`https://api-test.innoloft.com/configuration/${import.meta.env.VITE_APP_ID  || 1}/`);
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const configurationSlice = createSlice({
  name: 'configuration',
  initialState: { configuration: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchConfiguration.fulfilled, (state, action) => {
        console.log('done')
      state.configuration = action.payload;
    });
  },
});

export default configurationSlice.reducer;
