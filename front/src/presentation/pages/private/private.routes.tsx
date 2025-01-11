import { Route, Routes } from "react-router-dom";
import { privateRouter } from "../../../application/core/constants/ROUTES";
import { PrivateLayaut } from "../../layouts/privateLayaut";

export const RouterPrivate = () => {
  return (
    <Routes>
      <Route element={<PrivateLayaut />}>
        {privateRouter.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Route>
    </Routes>
  );
};
