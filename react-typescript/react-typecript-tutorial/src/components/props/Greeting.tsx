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
          <h4>
            Hey! {props.name}, You have {props.messageCount} new messages.{" "}
          </h4>
        </div>
      ) : (
        <h4>Welcome Guest</h4>
      )}
    </div>
  );
};

export default Greeting;
