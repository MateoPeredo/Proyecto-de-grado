import { Link } from "react-router-dom";
import { routesType } from "../../../application/core/constants/ROUTES";

export interface routesWithActive extends Omit<routesType, "component"> {
  active: boolean;
  isCollapsed: boolean;
}

export const CustomLink: React.FC<routesWithActive> = ({
  name,
  icon,
  path,
  active,
  isCollapsed,
}) => (
  <Link
    to={path}
    className={`flex items-center gap-2 rounded-md justify-center p-2 w-full transition-all duration-300 ease-in-out overflow-hidden text-sm  ${
      active
        ? "bg-primary text-white"
        : "hover:bg-primary/70 hover:text-white text-black"
    } `}
  >
    <p className="text-xl z-10">{icon}</p>
    <span
      className={`${
        isCollapsed
          ? "opacity-0 translate-x-[-10px] z-[-1] absolute"
          : "opacity-1 translate-x[0px]"
      } flex-1 `}
    >
      {name}
    </span>
  </Link>
);
