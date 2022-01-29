import { ReactNode } from "react";

interface Iprops {
  children: ReactNode;
}

function ContentComponent({ children }: Iprops) {
  return <div className="content-component">{children}</div>;
}

export default ContentComponent;
