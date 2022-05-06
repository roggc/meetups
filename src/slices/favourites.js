import { createSlice } from "react-context-slices";

export const slice = "favourites";
const initialState = { [slice]: { ids: [] } };
const ADD = "ADD";
const reducer = (draft, action) => {
  switch (action.type) {
    case ADD:
      if (!draft[slice].ids.some((id) => id === action.payload))
        draft[slice].ids.push(action.payload);
      break;
    default:
      break;
  }
};
export const { useValues, useActions } = createSlice(
  reducer,
  initialState,
  slice,
  (useDispatch) => () => {
    const dispatch = useDispatch();
    const add = (id) => dispatch({ type: ADD, payload: id });
    return { [slice]: { add } };
  }
);
