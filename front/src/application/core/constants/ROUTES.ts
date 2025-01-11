import { Dashboard } from "src/presentation/pages/private/dashboard";
import { Graphics } from "src/presentation/pages/private/graphics";
import { Ids } from "src/presentation/pages/private/ids";
import { Report } from "src/presentation/pages/private/report";
import { Traffic } from "src/presentation/pages/private/traffic";
import { Login } from "src/presentation/pages/public/login";
import { Alert } from "../../../presentation/pages/private/alert";
import {
  ICON_DASHBOARD,
  iCON_TRAFFIC,
  ICON_CHART,
  ICON_IDS,
  ICON_REPORT,
  ICON_ALERT,
} from "src/presentation/shared/global/icons";

interface routesType {
  path: string;
  name: string;
  component: () => JSX.Element;
  icon?: JSX.Element;
}

export const privateRouter: routesType[] = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    icon: ICON_DASHBOARD,
  },
  {
    path: "/graphics",
    name: "Graficos",
    component: Graphics,
    icon: ICON_CHART,
  },
  {
    path: "/ids",
    name: "IDs",
    component: Ids,
    icon: ICON_IDS,
  },
  {
    path: "/report",
    name: "Reportes",
    component: Report,
    icon: ICON_REPORT,
  },
  {
    path: "/traffic",
    name: "Trafico",
    component: Traffic,
    icon: iCON_TRAFFIC,
  },
  {
    path: "/Alert",
    name: "Alertas",
    component: Alert,
    icon: ICON_ALERT,
  },
];

export const publicRouter: routesType[] = [
  {
    path: "login",
    name: "Login",
    component: Login,
  },
];
