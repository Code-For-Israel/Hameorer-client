import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {removeDataLocal, setDataLocal} from '../hooks/LocalStorage/AsyncStorage';
import GetSiteUrl from '../utils/GetSiteUrl';

const baseUrl = GetSiteUrl();

const initialState = {
  email: '',
  pass: '',
  refresh: '',
  access: '',
  loading: true,
  error: null,
  is_guide: false,
};

export const loginThunk = createAsyncThunk('loginAsyncThunk', async ({ email, password }) => {
  const response = await fetch(`${baseUrl}token/`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  return data;
});
//get new access token with refresh
export const refreshAccess = createAsyncThunk('refresh', async (refresh) => {
  const response = await fetch(`${baseUrl}token/refresh/`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refresh }),
  }) .then((response) => response.json())
      .then((json) => console.log(json.access))
      .catch(() => () => console.log("error"))
      .finally(() => setLoading(false));
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  else {
    const data = await response.json();
    await setDataLocal('accessToken', data.access);
    console.log(data.access)
    return data;
  }
});

//logout
export const logoutThunk = createAsyncThunk('logoutAsyncThunk', () => {
  removeDataLocal('refreshToken').then(() => console.log('remove Refresh token'));
  removeDataLocal('accessToken').then(() => console.log('remove access token'));
});

export const LoginSlice = createSlice({
  name: 'login',
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
      state.refresh = action.payload.refresh;
      state.access = action.payload.access;
      state.loading = false;
      state.error = null;
      state.is_guide = action.payload.is_guide;

      setDataLocal('refreshToken', action.payload.refresh).then(() =>
        console.log('saved Refresh token'),
      );
      setDataLocal('accessToken', action.payload.access).then(() =>
        console.log('saved access token'),
      );
    });
    builder.addCase(loginThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.refresh = '';
      state.access = '';
      console.log('LOG-IN error:', state.error.message);
      // notify(state.error.message);
    });
    //refresh
    builder.addCase(refreshAccess.fulfilled, (state, action) => {
      //console.log(action.payload);
      state.access = action.payload.access;
      state.loading = false;
      state.error = null;
      setDataLocal('refreshToken', action.payload.refresh).then(() =>
        console.log('saved Refresh token'),
      );
    });
    builder.addCase(refreshAccess.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(refreshAccess.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      removeDataLocal('refreshToken').then(() => console.log('remove Refresh token'));
      removeDataLocal('accessToken').then(() => console.log('remove access token'));
      console.log('LOG-IN error:', state.error.message);
      // notify(state.error.message);
    });
    //logout
    builder.addCase(logoutThunk.fulfilled, (state, action) => {
      state.refresh = null;
      state.access = null;
      state.loading = false;
      state.error = null;
      state.is_guide = null;
    });
    builder.addCase(logoutThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logoutThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      console.log('LOG-OUT error:', state.error.message);
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
export const selectIsGuide = (state) => state.login.is_guide;

export default LoginSlice.reducer;
