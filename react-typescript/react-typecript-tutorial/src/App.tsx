import "./App.css";
import Container_Style from "./components/Container_Style";
import Button from "./components/events/Button";
import Input from "./components/events/Input";
import Greeting from "./components/props/Greeting";
import Header from "./components/props/Header";
import Oscar from "./components/props/Oscar";
import Person from "./components/props/Person";
import PersonList from "./components/props/PersonList";
import Status from "./components/props/Status";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      id: 1,
      first: "Bruce",
      last: "Wayne",
    },
    {
      id: 2,
      first: "Clark ",
      last: "Kent",
    },
    {
      id: 3,
      first: "Princess ",
      last: "Diana",
    },
  ];
  return (
    <div className="App">
      <Greeting name="Faiz" messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="error" />
      <Header>Hey, this is children props in typescript</Header>
      <Oscar>
        <Header>This component is a children props </Header>
      </Oscar>
      <Button
        handleClick={(event, id) => console.log("Button Clicked", event)}
      />
      <Input
        value=""
        handleChange={(event) => console.log("Input Event Fired")}
      />
      <Container_Style
        styles={{ border: "1px solid,black", padding: "1rem" }}
      />
    </div>
  );
}

export default App;
