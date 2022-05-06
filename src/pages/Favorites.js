import { useFetch } from "../util-hooks/useFetch";
import { useValues, favourites } from "../slices";
import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

export default function FavoritesPage() {
  const { data } = useFetch({ url: "/data.json" });
  const {
    [favourites]: { ids },
  } = useValues(favourites);
  if (!data) return <p>Loading...</p>;
  return (
    <section>
      <h1>Favorites Page</h1>
      <ul className={classes.list}>
        {data
          .filter((item) => ids.some((id) => id === item.id))
          .map((item) => (
            <MeetupItem item={item} key={item.id} />
          ))}
      </ul>
    </section>
  );
}
