import { rootReducer } from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";

export const store = createStore(

    rootReducer,
    compose(applyMiddleware(thunk),
        typeof window === "object" &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined" ?
            window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);


