import Link from 'next/link';
import classes from '../../styles/Header.module.css';

function Header() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Next Rendering</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/static-rendering'>Static Rendering</Link>
          </li>
          <li>
            
            <Link href='/server-rendering'>Server Rendering</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;