"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { ImContrast } from "react-icons/im";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  function handleTheme() {
    setTheme(
      theme === "light" ? "dark" : theme === "dark" ? "system" : "light",
    );
  }
  return (
    <Button
      onClick={handleTheme}
      variant="ghost"
      aria-label={
        theme === "light" ? "light" : theme === "dark" ? "dark" : "system"
      }
      size={"icon"}
    >
      {theme === "light" && <Sun className="h-5! w-5!" />}
      {theme === "dark" && <Moon className="h-5! w-5!" />}
      {theme === "system" && <ImContrast className="h-5! w-5!" />}
    </Button>
  );
}
