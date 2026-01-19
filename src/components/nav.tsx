import React from "react";
import ThemeToggle from "./theme-toggle";
import { Ham, Hamburger, Menu } from "lucide-react";

export default function () {
  return (
    <div className="sm:max-w-4/6 h-14 mx-auto flex justify-between sm:justify-end items-center text-3xl gap-2">
      <ThemeToggle />
    </div>
  );
}
