// import { IconContext } from "react-icons";

function MenuIcon(): JSX.Element {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6h16M4 12h8m-8 6h16"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function UserIcon(): JSX.Element {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="black"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6h16M4 12h8m-8 6h16"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function CartIcon(): JSX.Element {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="black"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6h16M4 12h8m-8 6h16"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function HelpIcon(): JSX.Element {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="black"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6h16M4 12h8m-8 6h16"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function MenuItems(): JSX.Element {
  return (
    <>
      <li>
        <button type="button">Item 1</button>
      </li>
      <li>
        <button type="button">Item 2</button>
      </li>
      <li>
        <button type="button">Item 3</button>
      </li>
    </>
  );
}

function NavBar(): JSX.Element {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div className="btn btn-ghost lg:hidden" role="button" tabIndex={0}>
            <MenuIcon />
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <MenuItems />
          </ul>
        </div>
        <button className="btn btn-ghost text-xl" type="button">
          daisyUI
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <MenuItems />
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost" type="button">
          <UserIcon />
        </button>
        <button className="btn btn-ghost" type="button">
          <CartIcon />
        </button>
        <button className="btn btn-ghost" type="button">
          <HelpIcon />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
