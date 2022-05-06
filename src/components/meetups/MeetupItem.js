
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card"
import {useActions,favourites,useValues,pages} from '../../slices'
import {ALL_MEETUP_PAGE,FAVORITES_PAGE} from '../../utils/constants'

export default function MeetupItem({item}) {
  const {[favourites]:{add,substract}}=useActions()
  const {[pages]:{page}}=useValues(pages)
  return (
    <li className={classes.item} data-test='meet-up-item'>
      <Card>
        <div className={classes.image}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={classes.content}>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </div>
        {page===ALL_MEETUP_PAGE&&<div className={classes.actions}>
          <button onClick={()=>add(item.id)}>Add to favorites</button>
        </div>}
        {page===FAVORITES_PAGE&&<div className={classes.actions}>
          <button onClick={()=>substract(item.id)}>Remove from favorites</button>
        </div>}
      </Card>
    </li>
  );
}
