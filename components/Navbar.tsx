import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import rehanImage from "@/assets/rehan.jpg";
import Menu from "./Menu";
import { Signup } from "@/components/Signup";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="grid grid-cols-[auto,auto] md:grid-cols-[auto,auto,auto] py-2 px-6  w-screen  items-center justify-between border-b">
      <div className="">
        <div className="flex gap-x-4 items-center">
          <Sheet>
            <SheetTrigger>
              <HamburgerMenuIcon className="h-8 w-10 text-gray-300 bg-gray-950 py-1 rounded-md md:hidden" />
            </SheetTrigger>
            <SheetContent side={"left"} className="w-46 sm:w-64">
              <div className="flex flex-col gap-y-4">
                <Button variant={"ghost"} size={"sm"}>
                  <Link href={"/signup"} className="text-lg font-medium">Home</Link>
                </Button>
                <Button variant={"ghost"} size={"sm"}>
                  <Link href={"/signup"} className="text-lg font-medium">Profile</Link>
                </Button>
                <Button variant={"ghost"} size={"sm"}>
                  <Link href={"/signup"} className="text-lg font-medium">Blogs</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          <Avatar className="justify-self-start ">
            <AvatarImage />
            <Image
              src={rehanImage}
              alt="rehan"
              width={300}
              height={300}
              className="rounded-full h-full w-full object-cover"
            />
            <AvatarFallback>MR</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* <Image
        src={logo}
        alt="musa's blog"
        className="h-16 w-16  object-contain sm:min-w-min sm:min-h-min"
      /> */}

      <div className="hidden md:flex md:justify-center md:items-center">
        <Menu />
      </div>
      <div className="justify-self-start">
        <Signup />
      </div>
    </div>
  );
}
