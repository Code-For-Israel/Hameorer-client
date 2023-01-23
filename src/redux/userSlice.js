import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setDataLocal } from "../hooks/LocalStorage/AsyncStorage";

const baseUrl = "http://3.140.113.123:8000/";

const initialState = {
  // email: "",
  // pass: "",
  refresh: "",
  access: "",
  loading: true,
  error: null,
};

export const loginThunk = createAsyncThunk(
  "loginAsyncThunk",
  async ({ email, password }) => {
    const response = await fetch(`${baseUrl}api/token/`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    return data;
  }
);
//get new access token with refresh
export const refreshAccess = createAsyncThunk("refresh", async (refresh) => {
  const response = await fetch(`${baseUrl}api/token/refresh/`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh }),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
});

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setAccess: (state, action) => {
      state.access = action.payload;
      state.loading = false;
    },
    setRefresh: (state, action) => {
      state.refresh = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    //login
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      //console.log(action.payload);
      state.refresh = action.payload.refresh;
      state.access = action.payload.access;
      state.loading = false;
      state.error = null;
      console.log("logged in");

      setDataLocal(action.payload.refresh).then(() =>
        console.log("saved Refresh token")
      );
    });
    builder.addCase(loginThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      console.log("LOG-IN error:", state.error.message);
      // notify(state.error.message);
    });
    //refresh
    builder.addCase(refreshAccess.fulfilled, (state, action) => {
      //console.log(action.payload);
      state.access = action.payload.access;
      state.loading = false;
      state.error = null;
      setDataLocal(action.payload.access).then(() =>
        console.log("saved Refresh token")
      );
    });
    builder.addCase(refreshAccess.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(refreshAccess.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      console.log("LOG-IN error:", state.error.message);
      // notify(state.error.message);
    });
  },
});

//reducers actions:
export const { setAccess, setRefresh, setLoading } = LoginSlice.actions;

//states
//export const selectEmail = (state) => state.login.email;
export const selectRefresh = (state) => state.login.refresh;
export const selectAccess = (state) => state.login.access;
export const selectLoading = (state) => state.login.loading;

export default LoginSlice.reducer;
