import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DragHandleHorizontalIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import Sidebar from "./Sidebar";
import { AvatarFallback } from "@radix-ui/react-avatar";

const Navbar = () => {
  return (
    <div className="px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center font-extrabold">
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full text-black dark:text-white"
            >
              <DragHandleHorizontalIcon className="h-10 w-10" />
            </Button>
          </SheetTrigger>

          <SheetContent
            className="w-72 border-r-0 flex flex-col justify-start [&>button]:hidden"
            side="left"
          >
            <SheetHeader>
              <SheetTitle>
                <div className="text-3xl flex justify-center items-center">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="gold-7980065_1280.jpg" />
                  </Avatar>
                  <div>
                    <span className="font-extrabold text-2xl">CryptoVerse</span>
                  </div>
                </div>
              </SheetTitle>
            </SheetHeader>
            <Sidebar />
          </SheetContent>
        </Sheet>
        <p className="font-extrabold text-sm lg:text-base cursor-pointer">
          CryptoVerse
        </p>
        <div className="p-0 ml-9">
          <Button variant="outline" className="flex items-center gap-3">
            <MagnifyingGlassIcon />
            <span className="font-extrabold">Search</span>
          </Button>
        </div>
      </div>
      <div>
        <Avatar className="cursor-pointer">
          <AvatarFallback>K</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
