import { useEffect } from "react";

type FnType = () => any;

export const useMount = (fn: FnType) => {
  useEffect(() => fn(), []);
};
