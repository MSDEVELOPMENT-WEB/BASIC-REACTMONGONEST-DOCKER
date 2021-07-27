import { configureStore } from '@reduxjs/toolkit';
import rootReducers from "./reducers/root.reducers";

export const store = configureStore({
    reducer: {
        root: rootReducers
    }
});
