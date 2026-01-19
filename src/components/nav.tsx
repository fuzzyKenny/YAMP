import React from "react";
import { OpenSidebar } from "./custom-sidebar";
import ThemeToggle from "./theme-toggle";

export default function Nav() {
  return (
    <>
      <nav className="h-14 w-full border-b flex items-center p-4 justify-between">
        <OpenSidebar />
        <ThemeToggle />
      </nav>
    </>
  );
}
