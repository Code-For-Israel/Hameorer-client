import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseUrl = "http://3.140.113.123:8000/";

const initialState = {
  serverData: {},
  loading: false,
  error: null,
};

export const getStories = createAsyncThunk("getStoriesThunk", async (token) => {
  console.log("using the token:", token);
  const response = await fetch(`${baseUrl}api/v1/stories/`, {
    method: "GET",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
});

export const dataSlice = createSlice({
  name: "backendData",
  initialState,
  reducers: {
    //TBD
  },
  extraReducers: (builder) => {
    //login
    builder.addCase(getStories.fulfilled, (state, action) => {
      console.log(action.payload);
      state.serverData = action.payload
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getStories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getStories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      console.log("getData error:", state.error.message);
      // notify(state.error.message);
    });
  },
});

//reducers action TBD:
//export const { updateEmail, updatePass } = LoginSlice.actions;
//states
//export const selectEmail = (state) => state.login.email;
export const selectServerData = (state) => state.backendData.serverData;

export default dataSlice.reducer;
