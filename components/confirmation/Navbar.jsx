import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  return (
    <header className="h-[64px] w-full bg-[#F5F5F5] px-6">
      <div className="flex h-full items-center">
        <h1
          className="
            text-3xl
            font-bold
            leading-10
            tracking-normal
            text-[#0C9733]
           
          "
          style={{
            fontFamily: "Poppins, sans-serif",
          }}
        >
          SWAPPROo
        </h1>
      </div>

      <Separator />
    </header>
  );
}
