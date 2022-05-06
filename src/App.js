import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import { FAVORITES_PAGE, NEW_MEETUP_PAGE } from "./utils/constants";

import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import { useValues, pages,useActions,header } from "./slices";

import { useEffect } from "react";

function App() {
  const {
    [pages]: { page },
  } = useValues(pages);

  const {[header]:{setIsShown}}=useActions()

  function getCurrentPageComponent() {
    let currentPageComponent = <AllMeetupsPage />;
    switch (page) {
      case FAVORITES_PAGE:
        currentPageComponent = <FavoritesPage />;
        break;
      case NEW_MEETUP_PAGE:
        currentPageComponent = <NewMeetupsPage />;
        break;
      default:
        currentPageComponent = <AllMeetupsPage />;
    }

    return currentPageComponent;
  }

  useEffect(() => {
    var lastScrollTop = 0;

    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    window.addEventListener(
      "scroll",
      function () {
        // or window.addEventListener("scroll"....
        var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > lastScrollTop) {
          // downscroll code
          setIsShown(false)
        } else {
          // upscroll code
          setIsShown(true)
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
      },
      false
    );
  }, []);

  return (
    <div data-test="app">
      <MainNavigation />
      <Layout>{getCurrentPageComponent()}</Layout>
    </div>
  );
}

export default App;
