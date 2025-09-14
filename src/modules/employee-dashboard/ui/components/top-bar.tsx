import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell } from "lucide-react";

export const TopBar = () => {
  return (
    <header className="flex w-full justify-between shrink-0 items-center gap-2 transition-[width,height] ease-linear">
      <div className="w-full flex items-center gap-2 px-4 py-2">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <div className="w-full flex items-center justify-between">
          <div>
            <h1 className="text-blue-500 text-xl font-medium">Good morning, John!</h1>
            <p className="text-muted-foreground">{new Date().toDateString()}</p>
          </div>
          <div>
            <div className="cursor-pointer relative">
              <Bell className="size-5" />
              <div className="inline-flex justify-center items-center rounded-full font-semibold text-white absolute -top-2 -right-2 size-4 p-0 text-xs bg-red-500">
                3
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

