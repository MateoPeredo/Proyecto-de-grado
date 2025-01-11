import { Link } from "react-router-dom";
import { privateRouter } from "../../../application/core/constants/ROUTES";
import { useMenu } from "../../../application/core/hooks/useMenu";

export const SideBar = () => {
  const { isCollapsed } = useMenu();
  return (
    <nav
      className={` ${
        isCollapsed ? "w-[80px]" : "w-[250px]"
      } bg-primary flex justify-center items-center transition-all duration-300 `}
    >
      <section className=" text-white flex flex-col gap-2">
        {privateRouter.map((route, index) => (
          <Link key={index} to={route.path} className="flex items-center gap-2">
            {route.icon}
            {!isCollapsed && (
              <span
                className={`${
                  isCollapsed
                    ? "opacity-0 translate-x-[-10px]"
                    : "opacity-1 translate-x[0px]"
                } transition-all duration-500 ease-in-out`}
              >
                {route.name}
              </span>
            )}
          </Link>
        ))}
      </section>
    </nav>
  );
};
