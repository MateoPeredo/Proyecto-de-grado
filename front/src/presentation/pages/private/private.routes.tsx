import { Route, Routes } from "react-router-dom";
import { privateRouter } from "../../../application/core/constants/ROUTES";

export const RouterPrivate = () => {
  return (
    <Routes>
      {privateRouter.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
    </Routes>
  );
};
