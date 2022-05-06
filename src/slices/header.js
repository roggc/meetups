import { createSlice } from "react-context-slices";

export const slice = "header";
const initialState = { [slice]: { isShown: true } };
const SET_IS_SHOWN = "SET_IS_SHOWN";
const reducer = (draft, action) => {
  switch (action.type) {
    case SET_IS_SHOWN:
      draft[slice].isShown = action.payload;
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
    const setIsShown = (value) =>
      dispatch({ type: SET_IS_SHOWN, payload: value });
    return { [slice]: { setIsShown } };
  }
);
