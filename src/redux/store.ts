import {
  AnyAction,
  combineReducers,
  configureStore,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import ThemeReducer from "./themeSlice/themeSlice";
import CountriesReducer from "./api/serviceSlice";
import thunkMiddleware from "redux-thunk";

export const rootReducer = combineReducers({
  theme: ThemeReducer,
  countries: CountriesReducer,
});
// This would produce the following state object

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});

export interface rootState {
  theme: {
    theme: boolean;
  };
  countries: {
    status: string;
    data: [];
    borderData: [];
  };
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
