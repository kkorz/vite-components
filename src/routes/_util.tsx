import { Suspense, lazy } from "react";
import { Spin } from "@arco-design/web-react";
import { RouteObject } from "react-router-dom";

export function LazyElement({ element }: any) {
  const LazyComponent = lazy(element);
  return (
    <Suspense fallback={<Spin dot />}>
      <LazyComponent />
    </Suspense>
  );
}

/**
 * 处理routes 如果element是懒加载，要包裹Suspense
 * @param routes
 * @returns routes
 */
export function dealRoutes(routes: RouteObject[]) {
  if (routes && Array.isArray(routes) && routes.length > 0) {
    routes.forEach((route) => {
      if (route.element && typeof route.element === "function") {
        route.element = <LazyElement element={route.element} />;
      }
      if (route.children) {
        dealRoutes(route.children);
      }
    });
  }
  return routes;
}
