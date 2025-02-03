import { createSlice } from '@reduxjs/toolkit';

const feedSlice = createSlice({
    name: 'feed',
    initialState: [],  // Make sure the initial state is an empty array
    reducers: {
        addFeed: (state, action) => action.payload,  // Replace state with new feed data
        removeFeed : (state,action) => null,
    },
});

export const { addFeed } = feedSlice.actions;
export default feedSlice.reducer;
