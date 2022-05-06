import {
  ALL_MEETUP_PAGE,
  FAVORITES_PAGE,
  NEW_MEETUP_PAGE,
} from "./../../utils/constants";
import { useValues, favourites, useActions, pages, header } from "../../slices";
import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";

export default function MainNavigation() {
  const {
    [favourites]: { ids },
  } = useValues(favourites);
  const {
    [pages]: { set },
  } = useActions();
  const {
    [header]: { isShown },
  } = useValues(header);
  return (
    <header
      className={
        isShown ? classes.header : `${classes.header} ${classes.hidden}`
      }
      data-test="navigation-header"
    >
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={() => set(ALL_MEETUP_PAGE)}>
              All Meetups
            </Link>
          </li>

          <li>
            <Link to="/new-mettup" onClick={() => set(NEW_MEETUP_PAGE)}>
              Add New Meetup
            </Link>
          </li>
          <li>
            <Link to="/favourites" onClick={() => set(FAVORITES_PAGE)}>
              My Favorites
              <span className={classes.badge}>{ids.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
