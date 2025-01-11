import { Route, Routes } from "react-router-dom";
import { publicRouter } from "../../../application/core/constants/ROUTES";

export const RouterPublic = () => {
  return (
    <Routes>
      {publicRouter.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
    </Routes>
  );
};
