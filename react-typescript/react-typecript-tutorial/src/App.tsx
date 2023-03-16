import "./App.css";
import Container_Style from "./components/Container_Style";
import Button from "./components/events/Button";
import Input from "./components/events/Input";
import Box from "./components/hooks/useContextHook/ThemeContext/Box";
import { ThemeContextProvider } from "./components/hooks/useContextHook/ThemeContext/ThemeContext";
import User from "./components/hooks/useContextHook/userContext/User";
import { UserContextProvider } from "./components/hooks/useContextHook/userContext/UserContext";
import Counter from "./components/hooks/useReducerHook/Counter";
import ResetCounter from "./components/hooks/useReducerHook/ResetCounter";
import DomRef from "./components/hooks/useRefHook/DomRef";
import ManipulateRef from "./components/hooks/useRefHook/ManipulateRef";
import UseStateHook from "./components/hooks/UseStateHook";
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
      <h1 className="text-3xl">*****Props*****</h1>
      <Greeting name="Faiz" messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="error" />
      <Header>Hey, this is children props in typescript</Header>
      <Oscar>
        <Header>This component is a children props </Header>
      </Oscar>
      <hr />
      <h1 className="text-3xl mt-4">*****Events*****</h1>
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
      <hr />
      <h1 className="text-3xl mt-4">*****Hooks*****</h1>
      <UseStateHook />
      <Counter />
      <br />
      <ResetCounter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <DomRef />
      <ManipulateRef />
    </div>
  );
}

export default App;