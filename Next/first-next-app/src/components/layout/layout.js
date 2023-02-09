import Header from '../header';

function Layout(props) {
  return (
    <div>
      <Header/>
      <main className="my-12 w-11/12 mx-auto">{props.children}</main>
    </div>
  );
}

export default Layout;
