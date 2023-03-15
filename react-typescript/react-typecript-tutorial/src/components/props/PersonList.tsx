type PersonListProps = {
  names: {
    id: number;
    first: string;
    last: string;
  }[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h4 key={name.first}>
            {name.id}. {name.first} {name.last}
          </h4>
        );
      })}
    </div>
  );
};

export default PersonList;
