import { RouteObject } from "react-router-dom";
import { dealRoutes } from "./_util";

const routes: RouteObject[] = [
  {
    path: "/",
    element: () => import("pages/Welcome")
  },
  {
    path: "/festival/newyear",
    element: () => import("pages/festival/new-year")
  },
  {
    path: "/festival/midautumn",
    element: () => import("pages/festival/mid-autumn")
  }
];

export default dealRoutes(routes);
