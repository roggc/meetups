import { composeProviders } from "react-context-slices";
import {
  useValues as useFavouriteValues,
  useActions as useFavouriteActions,
} from "./favourites";
import {
  useValues as usePagesValues,
  useActions as usePagesActions,
} from "./pages";

export { slice as favourites } from "./favourites";
export { slice as pages } from "./pages";

export const useValues = (slice) => ({
  ...useFavouriteValues(slice),
  ...usePagesValues(slice),
});
export const useActions = () => ({
  ...useFavouriteActions(),
  ...usePagesActions(),
});

export default composeProviders();
