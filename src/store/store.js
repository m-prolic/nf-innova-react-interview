import reposCountReducer from "./reducers/reposCountReducer";
import reposReducer from "./reducers/reposReducer";

export const store = configureStore({
  reducer: {
    reposReducer: reposReducer,
    reposCountReducer: reposCountReducer,
  },
});
