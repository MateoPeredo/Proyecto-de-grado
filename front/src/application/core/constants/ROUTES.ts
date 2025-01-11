import { Dashboard } from "src/presentation/pages/private/dashboard";
import { Graphics } from "src/presentation/pages/private/graphics";
import { Ids } from "src/presentation/pages/private/ids";
import { Report } from "src/presentation/pages/private/report";
import { Traffic } from "src/presentation/pages/private/traffic";
import { Login } from "src/presentation/pages/public/login";
interface routesType {
  path: string;
  name: string;
  component: () => JSX.Element;
}

export const privateRouter: routesType[] = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/graphics",
    name: "Graficos",
    component: Graphics,
  },
  {
    path: "/ids",
    name: "IDs",
    component: Ids,
  },
  {
    path: "/report",
    name: "Reportes",
    component: Report,
  },
  {
    path: "/traffic",
    name: "Trafico",
    component: Traffic,
  },
];

export const publicRouter: routesType[] = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];
