import React from "react";

interface Iprops {
  children: React.ReactNode;
}

function ContentComponent({ children }: Iprops) {
  return <div className="content-component">{children}</div>;
}

export default ContentComponent;
