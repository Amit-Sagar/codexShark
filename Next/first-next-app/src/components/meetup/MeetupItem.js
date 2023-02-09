import { useRouter } from "next/router";

import Card from "../ui/Card";
import classes from "../../../styles/MeetupItem.module.css";

function MeetupItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push(`meetup/${props.id}`);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className="bg-slate-500">
          <div className="text-center p-4 font-bold text-[#2c292b] text-xl">
            <h3>{props.title}</h3>
            <address>{props.address}</address>
          </div>
          <div className={classes.actions}>
            <button onClick={showDetailsHandler}>Show Details</button>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
