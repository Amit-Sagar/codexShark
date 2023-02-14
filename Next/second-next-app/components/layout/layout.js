import Header from './Header';

function Layout(props) {
  return (
    <div>
      <Header/>
      <main className="w-11/12 my-12 mx-auto">{props.children}</main>
    </div>
  );
}

export default Layout;
