import LoginAuth from "./LoginAuth";
import { ProfileProps } from "./Profile";

type PrivaeProps = {
  isLoggedin: boolean;
  Component: React.ComponentType<ProfileProps>;
};

export const Private = ({ isLoggedin, Component }: PrivaeProps) => {
  if (isLoggedin) {
    return <Component name="Faizan" />;
  } else {
    return <LoginAuth />;
  }
};
