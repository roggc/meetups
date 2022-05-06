import { composeProviders } from "react-context-slices";
import {
  useValues as useFavouriteValues,
  useActions as useFavouriteActions,
} from "./favourites";
import {
  useValues as usePagesValues,
  useActions as usePagesActions,
} from "./pages";
import {
  useValues as useHeaderValues,
  useActions as useHeaderActions,
} from "./header";

export { slice as favourites } from "./favourites";
export { slice as pages } from "./pages";
export { slice as header } from "./header";

export const useValues = (slice) => ({
  ...useFavouriteValues(slice),
  ...usePagesValues(slice),
  ...useHeaderValues(slice),
});
export const useActions = () => ({
  ...useFavouriteActions(),
  ...usePagesActions(),
  ...useHeaderActions(),
});

export default composeProviders();
