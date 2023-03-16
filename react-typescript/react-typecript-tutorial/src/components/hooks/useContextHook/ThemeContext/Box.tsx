import React, { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const Box = () => {
  const theme = useContext(ThemeContext);
  const [myTheme, setMyTheme] = useState(false);
  return (
    <>
      <button
        onClick={() => setMyTheme(!myTheme)}
        className="bg-slate-500 rounded-md my-2 p-2"
      >
        Change Color
      </button>
      <div
        style={
          myTheme
            ? { backgroundColor: theme.primary.main, color: theme.primary.text }
            : {
                backgroundColor: theme.secondary.main,
                color: theme.secondary.text,
              }
        }
      >
        Theme Context
      </div>
    </>
  );
};

export default Box;
