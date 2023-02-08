import Button from "../UI/Button" ;

const UserInput = (props) => {
  // const [userInput, setUserInput] = useState("");

  const addData = () => {
    {
      props.userInput && props.onAddItem(props.userInput);
      props.onSetUserInput("");
    }
  };
  return (
      <div className="">
        <input
          className="bg-slate-200 w-3/4  px-2 py-2.5 text-black"
          type="text"
          placeholder="Add work here..."
          onChange={(e) => {
            props.onSetUserInput(e.target.value);
          }}
          value={props.userInput}
        />
        <Button className="w-1/4 h-[48px]" onClick={addData}>Add</Button>
      </div>
  );
};

export default UserInput;
