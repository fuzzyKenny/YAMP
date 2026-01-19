import { OpenSidebar } from "@/components/custom-sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  return (
    <>
      <div className="max-h-screen absolute">
        <AppSidebar />
      </div>
    </>
  );
}
