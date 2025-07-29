import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CopyIcon,
  DollarSign,
  DownloadIcon,
  ShuffleIcon,
  UploadIcon,
  WalletIcon,
} from "lucide-react";
import { ReloadIcon, UpdateIcon } from "@radix-ui/react-icons";
import TopupForm from "./TopupForm";
import WithdrawalForm from "./WithdrawalForm";
import TransferForm from "./TransferForm";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Wallet = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="pt-10 w-full lg:w-[60%] ">
        <Card>
          <CardHeader className="pb-9">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <WalletIcon size={30} />
                <div>
                  <CardTitle className="text-xl pl-5 font-extrabold">
                    My Wallet
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <p className="pl-5 pt-3 text-gray-400 text-sm">₹ 4045.12</p>
                    <CopyIcon
                      className="cursor-pointer hover:text-slate-300 pt-2"
                      size={25}
                    />
                  </div>
                </div>
              </div>
              <ReloadIcon className="cursor-pointer hover:text-gray-400 pt-2 w-7 h-7" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center pb-4">
              <DollarSign />
              <span className="text-2xl font-extrabold">435</span>
            </div>
            <div className="flex gap-7 ">
              <Dialog>
                <DialogTrigger>
                  <div className="h-12 w-24 hover:text-gray-700 mt-5 cursor-pointer flex flex-col items-center justify-center rounded-md justify-center rounded-md ">
                    <UploadIcon />
                    <span className="text-sm mt-2">Add Money</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-center text-xl font-extrabold">
                      Top Up Your Wallet
                    </DialogTitle>
                  </DialogHeader>
                  <TopupForm />
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger>
                  <div className="h-12 w-24 hover:text-gray-700 mt-5 cursor-pointer flex flex-col items-center justify-center rounded-md justify-center rounded-md ">
                    <DownloadIcon />
                    <span className="text-sm mt-2">Withdrawal</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-center text-xl font-extrabold">
                      Request Withdrawal
                    </DialogTitle>
                  </DialogHeader>
                  <WithdrawalForm />
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger>
                  <div className="h-12 w-24 hover:text-gray-700 mt-5 cursor-pointer flex flex-col items-center justify-center rounded-md justify-center rounded-md ">
                    <ShuffleIcon />
                    <span className="text-sm mt-2">Transfer</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-center text-xl font-extrabold">
                      Transfer to other wallet
                    </DialogTitle>
                  </DialogHeader>
                  <TransferForm />
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
        <div className="py-5 pt-10">
          <div className="flex gap-2 items-center pb-5">
            <h1 className="text-xl font-extrabold">Transaction History</h1>
            <UpdateIcon className="h-5 w-5 cursor-pointer hover:text-gray-400" />
          </div>

          <div className="space-y-5">
            {[1, 2, 3, 4, 5].map((item, i) => (
              <div key={i}>
                <Card className="px-5 flex justify-between items-center p-3">
                  <div className="flex items-center gap-5">
                    <Avatar>
                      <AvatarFallback>
                        <ShuffleIcon className="" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h1>Buy Asset</h1>
                      <p className="text-sm text-gray-500">28-07-2025</p>
                    </div>
                  </div>
                  <div>
                    <p className={`text-green-600`}>342 USD</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
