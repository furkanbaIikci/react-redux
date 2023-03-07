import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter";
import notes from "./notes";
export const store = configureStore({
    reducer: {
        counter,
        notes,

    },
});



