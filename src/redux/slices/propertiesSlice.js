// src/slices/propertiesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// :TODO: Move to .env
const API_BASE_URL =
  "https://laara-api-dev-3rc4fb3npa-ew.a.run.app/search/stays";
const APP_ID = "3a2f3e5b-4a89-4fcb-a7e1-31421c7a6344";

// Async thunk for fetching all properties
export const fetchProperties = createAsyncThunk(
  "properties/fetchProperties",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/filtered`, {
        headers: { "x-app-id": APP_ID },
      });
      if (response.data.status) {
        return response.data.data;
      } else {
        throw new Error(
          response.data.message || "Unexpected response from the server"
        );
      }
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

// Async thunk for fetching property details
export const fetchPropertyDetails = createAsyncThunk(
  "properties/fetchPropertyDetails",
  async (propertyId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${propertyId}`, {
        headers: { "x-app-id": APP_ID },
      });
      if (response.data.status) {
        return response.data.data;
      } else {
        throw new Error(
          response.data.message || "Unexpected response from the server"
        );
      }
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

const propertiesSlice = createSlice({
  name: "properties",
  initialState: {
    properties: [],
    propertyDetails: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.loading = false;
        state.properties = action.payload;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchPropertyDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPropertyDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.propertyDetails = action.payload;
      })
      .addCase(fetchPropertyDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default propertiesSlice.reducer;
