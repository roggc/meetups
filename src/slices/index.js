import { composeProviders } from "react-context-slices";
import {
  useValues as useFavouriteValues,
  useActions as useFavouriteActions,
} from "./favourites";

export { slice as favourites } from "./favourites";

export const useValues = (slice) => ({ ...useFavouriteValues(slice) });
export const useActions = () => ({ ...useFavouriteActions() });

export default composeProviders();
