// import { IconContext } from "react-icons";

import {
  CartIcon,
  ClothesIcon,
  HelpIcon,
  MapIcon,
  MenuIcon,
  MoneyIcon,
  PeopleIcon,
  UserIcon,
} from "./icons";

function MenuItems(): JSX.Element {
  return (
    <>
      <li>
        <button type="button">
          <MapIcon /> Donde estamos
        </button>
      </li>
      <li>
        <button type="button">
          <MoneyIcon /> Precios
        </button>
      </li>
      <li>
        <button type="button">
          <PeopleIcon />
          Equipo
        </button>
      </li>
      <li>
        <button type="button">
          <ClothesIcon />
          Ropa
        </button>
      </li>
    </>
  );
}

function NavBar(): JSX.Element {
  return (
    <div className="fixed top-0 z-50 navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div className="btn btn-ghost lg:hidden" role="button" tabIndex={0}>
            Menú <MenuIcon />
          </div>
          <ul className="menu menu-lg dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52">
            <MenuItems />
          </ul>
        </div>
        <ul className="menu menu-horizontal hidden lg:flex">
          <MenuItems />
        </ul>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal">
          <button className="btn btn-ghost text-xl" type="button">
            Company logo
          </button>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost" type="button">
          <span className="hidden lg:flex">Ayuda</span>
          <HelpIcon />
        </button>
        <button className="btn btn-ghost" type="button">
          <span className="hidden lg:flex">Tu cuenta</span>
          <UserIcon />
        </button>
        <button className="btn btn-ghost" type="button">
          <span className="hidden lg:flex">Carrito</span>
          <CartIcon />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
