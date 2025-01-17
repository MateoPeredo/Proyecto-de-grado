import { useLocation } from "react-router-dom";
import { privateRouter } from "../../../../application/core/constants/ROUTES";
import { useMenu } from "../../../../application/core/hooks/useMenu";
import { CustomLink } from "./customLink";
import { ICON_LOGOUT } from "../../global/icons";

export const SideBar = () => {
  const { isCollapsed } = useMenu();
  const location = useLocation();

  return (
    <nav
      className={`${
        isCollapsed ? "w-[80px]" : "w-[280px]"
      }  flex justify-center items-center transition-all duration-300 shadow-md col-start-1 row-start-2`}
    >
      <section className=" flex flex-col gap-2 w-full p-2 justify-center items-center">
        {privateRouter.map((route) => {
          const active = location.pathname === route.path;
          return (
            <CustomLink
              key={route.name}
              active={active}
              path={route.path}
              name={route.name}
              isCollapsed={isCollapsed}
              icon={route.icon}
            />
          );
        })}

        <CustomLink
          active={false}
          path="/login"
          name="Logout"
          isCollapsed={isCollapsed}
          icon={ICON_LOGOUT}
        />
      </section>
    </nav>
  );
};
