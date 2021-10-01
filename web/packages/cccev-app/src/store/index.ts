import { initRedux } from "@smartb/g2-providers";
import { filtersReducer } from "./filters/filters.reducer";
import thunk from "redux-thunk"

const reducers = {
    filters: filtersReducer
}

export const {store, history, reducer} = initRedux<typeof reducers>(reducers, [thunk])

export type State = ReturnType<typeof reducer>;

