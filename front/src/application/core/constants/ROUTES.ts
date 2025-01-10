import { Dashboard } from "src/presentation/pages/private/dashboard";
import { Graphics } from "src/presentation/pages/private/graphics";
import { Ids } from "src/presentation/pages/private/ids";
import { Report } from "src/presentation/pages/private/report";
import { Traffic } from "src/presentation/pages/private/traffic";

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
    name: "Graphics",
    component: Graphics,
  },
  {
    path: "/ids",
    name: "IDs",
    component: Ids,
  },
  {
    path: "/report",
    name: "Report",
    component: Report,
  },
  {
    path: "/traffic",
    name: "Traffic",
    component: Traffic,
  },
];
