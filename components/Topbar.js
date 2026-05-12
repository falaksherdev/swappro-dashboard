"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Bell } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-[62px] w-full border-b border-[#E5E5E5] bg-white px-6 flex items-center justify-between">
      <div className="w-full max-w-md">
        <div className="w-[288px] h-9 flex items-center gap-[6px] rounded-md text-[#737373]">
          <Search className="h-4 w-4 " />
          <Input
            placeholder="Type to search..."
            className="h-9 w-full border-0 bg-transparent focus-visible:ring-0"
          />
        </div>
      </div>
      <div className="flex items-center gap-[6px] h-[38px] opacity-100">
        <Button
          variant="ghost"
          size="icon"
          className="relative w-[32px] h-[32px] p-2 rounded-md"
        >
          <Bell className="h-[16px] w-[16px] " />
        </Button>

        <div className="flex items-center gap-3 cursor-pointer">
          <Avatar className="h-[38px] w-[38px]">
            <AvatarFallback className="bg-gray-300 text-[#171717] text-sm">
              FS
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
