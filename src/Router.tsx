import { Route, Navigate } from "react-router-dom";

import { CustomRoutes } from "@components/CustomRoutes";
import { Home } from "templates/Home";

export const AppRoutes = () => {
  return (
    <CustomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </CustomRoutes>
  );
};
