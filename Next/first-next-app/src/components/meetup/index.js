import React from "react";
import MeetupItem from "./MeetupItem";

const Meetup = (props) => {
  return (
    <div>
      <ul className="list-none m-0 p-0">
        {props.meetups.map((meetup) => (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
          />
        ))}
      </ul>
      
    </div>
  );
};

export default Meetup;
