import { configureStore } from "@reduxjs/toolkit"
import { animeSlice } from "../animesSelecionados/animeSlice"

export default configureStore({

    reducer: {

        [animeSlice.reducerPath]: animeSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(animeSlice.middleware)
})