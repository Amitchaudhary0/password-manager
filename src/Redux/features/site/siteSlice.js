import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Fetch data from the server
export const fetchData = createAsyncThunk("site/fetchData", async () => {
  let response = await fetch("http://localhost:3000/")
  let data = await response.json();
  return data;
})

// Add a new site data to the server
export const addSiteData = createAsyncThunk("site/addSiteData", async (siteData) => {
  await fetch("http://localhost:3000/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(siteData)
  });
  return siteData;  // Return the site data so it can be added to the state
});

// Delete all site data from the server
export const deleteSiteData = createAsyncThunk("site/deleteSiteData", async () => {
  await fetch("http://localhost:3000/", { method: "DELETE" });
});

export const siteSlice = createSlice({
  name: 'site',
  initialState: {
    value: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.value = action.payload;      
        console.log('Fetched data:', state.value);  
      })
      .addCase(addSiteData.fulfilled, (state, action) => {
        // Add the new site data to the state
        state.value.push(action.payload);
        console.log('New site added:', action.payload);  // Optional: log to verify
      })
      .addCase(deleteSiteData.fulfilled, (state) => {
        state.value = [];
      });
  }
});

export default siteSlice.reducer;
