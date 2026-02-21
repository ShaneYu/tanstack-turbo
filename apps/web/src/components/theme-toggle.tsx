import { Button } from "@repo/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@repo/ui/components/dropdown-menu";
import { useViewTransition } from "@repo/ui/hooks/use-view-transition";
import { useTheme } from "@repo/ui/lib/theme-provider";
import { MoonIcon, SunIcon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { startTransition } = useViewTransition();

  const handleThemeChange = (value: "light" | "dark" | "system") => {
    startTransition(() => {
      setTheme(value);
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" size="icon" />}>
        <SunIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuCheckboxItem checked={theme === "light"} onCheckedChange={(v) => v && handleThemeChange("light")}>
          Light
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={theme === "dark"} onCheckedChange={(v) => v && handleThemeChange("dark")}>
          Dark
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme === "system"}
          onCheckedChange={(v) => v && handleThemeChange("system")}
        >
          System
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
