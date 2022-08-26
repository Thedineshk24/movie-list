import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { movieApi } from "../services/moviesApi";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath] : movieApi.reducer
  },
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(movieApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
