import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const baseUrl = "http://3.140.113.123:8000/";

const initialState = {
    serverData: {}, loading: false, error: null, subjects: [], visible: false,
};


export const getStories = createAsyncThunk("getStoriesThunk", async (token) => {
    console.log("using the token:", token);
    const response = await fetch(`${baseUrl}api/v1/stories/`, {
        method: "GET", headers: {
            accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data;
});

export const getSubjects = createAsyncThunk("getSubjectsThunk", async (token) => {
    console.log("using the token:", token);
    const response = await fetch(`${baseUrl}api/v1/stories/subject/`, {
        method: "GET", headers: {
            accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data;
});

export const setRecording = createAsyncThunk("setRecordingThunk", async ({access, recording, bucket, name}) => {

    const response = await fetch(`${baseUrl}api/v1/media/${bucket}/${name}/`, {
        method: "POST", headers: {
            Authorization: `Bearer ${access}`,
        }, body: (recording),
    });
    const data = await response;
    return data;
});

export const setStory = createAsyncThunk("setStoryThunk", async ({access, story}) => {
    console.log("Create new story with token:", access);
    console.log("Create new story with data:", story);

    const response = await fetch(`${baseUrl}api/v1/stories/`, {
        method: "POST", headers: {
            accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${access}`,
        }, body: JSON.stringify(story),
    });
    const data = await response.json();
    return data;
});

export const dataSlice = createSlice({
    name: "backendData", initialState, reducers: {
        showModal: (state) => {
            state.visible = true;
        }, hideModal: (state) => {
            state.visible = false;
        },
    }, extraReducers: (builder) => {
        //get stories
        builder.addCase(getStories.fulfilled, (state, action) => {
            console.log(action.payload);
            state.serverData = action.payload;
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
        //get Subjects
        builder.addCase(getSubjects.fulfilled, (state, action) => {
            console.log(action.payload);
            state.subjects = action.payload;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(getSubjects.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getSubjects.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
            console.log("getData error:", state.error.message);
            // notify(state.error.message);
        });

        //POST story
        builder.addCase(setStory.fulfilled, (state, action) => {
            console.log(action.payload);
            state.visible = true;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(setStory.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(setStory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
            console.log("getData error:", state.error.message);
            // notify(state.error.message);
        });

        //POST recording
        builder.addCase(setRecording.fulfilled, (state, action) => {
            console.log(action.payload);
            state.visible = true;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(setRecording.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(setRecording.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
            console.log("getData error:", state.error.message);
            // notify(state.error.message);
        });
    },
});

export const {showModal, hideModal} = dataSlice.actions;

export const selectServerData = (state) => state.backendData.serverData;
export const selectSubjects = (state) => state.backendData.subjects;
export const selectVisable = (state) => state.backendData.visible;

export default dataSlice.reducer;
