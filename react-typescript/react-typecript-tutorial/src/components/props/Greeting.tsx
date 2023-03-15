import React from "react";
type GreetingProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

const Greeting = (props: GreetingProps) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <div>
          <h1>
            Hey! {props.name}, You have {props.messageCount} new messages.{" "}
          </h1>
        </div>
      ) : (
        <h1>Welcome Guest</h1>
      )}
    </div>
  );
};

export default Greeting;
