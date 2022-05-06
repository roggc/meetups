import { ALL_MEETUP_PAGE, FAVORITES_PAGE, NEW_MEETUP_PAGE } from "./../../utils/constants";
import {useValues,favourites,useActions,pages} from '../../slices'
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  const {[favourites]:{ids}}=useValues(favourites)
  const {[pages]:{set}}=useActions()
  return (
    <header className={classes.header} data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <a href="#" onClick={() => set(ALL_MEETUP_PAGE)}>
              All Meetups
            </a>
          </li>

          <li>
            <a href="#" onClick={() => set(NEW_MEETUP_PAGE)}>
              Add New Meetup
            </a>
          </li>
          <li>
            <a href="#" onClick={() => set(FAVORITES_PAGE)}>
              My Favorites
              <span className={classes.badge}>{ids.length}</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
