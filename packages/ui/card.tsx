import * as React from "react";

export function Card({ children }: { children: React.ReactNode }): JSX.Element {
  return <div>{children}</div>;
}
