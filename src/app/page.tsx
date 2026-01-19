import { Button } from "@/components/ui/button";
import React from "react";
import { Play } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <>
      <div className="wrapper h-screen max-w-full py-2 px-4">
        <Nav />
      </div>
    </>
  );
}
