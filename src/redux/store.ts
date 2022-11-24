import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "./themeSlice/themeSlice";



export const rootReducer = combineReducers({theme: ThemeReducer})
// This would produce the following state object

export const store = configureStore({
  reducer: rootReducer,
});

export interface rootState {
  theme:{
    theme:boolean
  }
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
