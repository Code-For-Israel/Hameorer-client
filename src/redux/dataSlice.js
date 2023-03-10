import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import GetSiteUrl from '../utils/GetSiteUrl';

const baseUrl = GetSiteUrl();

const initialState = {
    serverData: {},
    loading: false,
    error: null,
    subjects: [],
    visible: false,
};

export const getStories = createAsyncThunk('getStoriesThunk', async (token) => {
    const response = await fetch(`${baseUrl}v1/stories/`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    return await response.json();
});

export const getSubjects = createAsyncThunk('getSubjectsThunk', async (token) => {
    const response = await fetch(`${baseUrl}v1/stories/subject/`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    return await response.json();
});

export const setRecording = createAsyncThunk(
    'setRecordingThunk',
    async ({access, recording, bucket, recordingFileName}) => {
        const response = await fetch(`${baseUrl}v1/media/${bucket}/${recordingFileName}/`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${access}`,
            },
            body: recording,
        });
        return await response;
    },
);

export const setStory = createAsyncThunk('setStoryThunk', async ({access, story}) => {

    const response = await fetch(`${baseUrl}v1/stories/`, {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${access}`,
        },
        body: JSON.stringify(story),
    });
    const json = await response.json();
    return json;
});

export const updateStory = createAsyncThunk('updateStoryThunk', async ({access, story, id}) => {
    const response = await fetch(`${baseUrl}v1/stories/${id}`, {
        method: 'PATCH',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${access}`,
        },
        body: JSON.stringify(story),
    });
    const json = await response.json();
    return json;
});

export const dataSlice = createSlice({
    name: 'backendData',
    initialState,
    reducers: {
        showModal: (state) => {
            state.visible = true;
        },
        hideModal: (state) => {
            state.visible = false;
        },
    },
    extraReducers: (builder) => {
        //get stories
        builder.addCase(getStories.fulfilled, (state, action) => {
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
            console.log('getData error:', state.error.message);
            // notify(state.error.message);
        });
        //get Subjects
        builder.addCase(getSubjects.fulfilled, (state, action) => {
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
            console.log('getData error:', state.error.message);
            // notify(state.error.message);
        });

        //POST story
        builder.addCase(setStory.fulfilled, (state, action) => {
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
            console.log('getData error:', state.error.message);
            // notify(state.error.message);
        });

        builder.addCase(updateStory.fulfilled, (state, action) => {
            state.visible = true;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(updateStory.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateStory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
            console.log('getData error:', state.error.message);
            // notify(state.error.message);
        });

        //POST recording
        builder.addCase(setRecording.fulfilled, (state, action) => {
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
            console.log('getData error:', state.error.message);
            // notify(state.error.message);
        });
    },
});

export const {showModal, hideModal} = dataSlice.actions;

export const selectServerData = (state) => state.backendData.serverData;
export const selectSubjects = (state) => state.backendData.subjects;
export const selectVisable = (state) => state.backendData.visible;

export default dataSlice.reducer;
