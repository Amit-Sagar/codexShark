type HeaderProps = {
  children: string;
};

const Header = (props: HeaderProps) => {
  return <div>{props.children}</div>;
};

export default Header;
