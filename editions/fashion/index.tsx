import { PropsWithChildren } from "react";
import { Header } from "./components/Header";

export * from "./components/Header";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
