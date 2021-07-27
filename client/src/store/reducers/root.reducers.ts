import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: "Project created by MSDevelopment",
    contact: "contact.msdevelopment.fr",
};

export const rootReducers = createSlice( {
    name: 'root',
    initialState,
    reducers: {}
});

export const {} = rootReducers.actions;

export const getAll = (state: any) => state.root;

export default rootReducers.reducer;
