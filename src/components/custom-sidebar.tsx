"use client";

import { useSidebar } from "./ui/sidebar";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

// export default function CustomSidebarTrigger() {
//   const { open, setOpen, openMobile, setOpenMobile } = useSidebar();
//   const handleSidebar = () => {
//     setOpen(!open);
//     setOpenMobile(!openMobile);
//   };
//   return (
//     <Button variant={"outline"} size={"icon"} onClick={handleSidebar}>
//       {open ? <X className="h-5! w-5!" /> : <Menu className="h-5! w-5!" />}
//     </Button>
//   );
// }

const OpenSidebar = () => {
  const { setOpen, setOpenMobile } = useSidebar();
  const handleSidebar = () => {
    setOpen(true);
    setOpenMobile(true);
  };

  return (
    <Button variant={"outline"} size={"icon"} onClick={handleSidebar}>
      <Menu className="h-5! w-5!" />
    </Button>
  );
};

const CloseSidebar = () => {
  const { setOpen, setOpenMobile } = useSidebar();
  const handleSidebar = () => {
    setOpen(false);
    setOpenMobile(false);
  };

  return (
    <Button variant={"ghost"} size={"icon"} onClick={handleSidebar}>
      <X className="h-5! w-5!" />
    </Button>
  );
};

export { OpenSidebar, CloseSidebar };
