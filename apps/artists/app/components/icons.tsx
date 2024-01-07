// import { IconContext } from "react-icons";
import {
  GiHamburgerMenu,
  GiMuscleUp,
  GiHelp,
  GiTakeMyMoney,
} from "react-icons/gi";
import { TiShoppingCart } from "react-icons/ti";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoShirtSharp } from "react-icons/io5";

export function MenuIcon(): JSX.Element {
  return <GiHamburgerMenu size="1.5em" />;
}

export function UserIcon(): JSX.Element {
  return <GiMuscleUp size="1.5em" />;
}

export function CartIcon(): JSX.Element {
  return <TiShoppingCart size="1.5em" />;
}

export function HelpIcon(): JSX.Element {
  return <GiHelp size="1.5em" />;
}

export function MapIcon(): JSX.Element {
  return <FaMapMarkedAlt size="1em" />;
}

export function MoneyIcon(): JSX.Element {
  return <GiTakeMyMoney size="1em" />;
}

export function PeopleIcon(): JSX.Element {
  return <FaPeopleGroup size="1em" />;
}

export function ClothesIcon(): JSX.Element {
  return <IoShirtSharp size="1em" />;
}
