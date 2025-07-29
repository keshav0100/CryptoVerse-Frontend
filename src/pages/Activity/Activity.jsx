import React from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BookmarkIcon, BookmarkPlusIcon } from "lucide-react";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";

const Activity = () => {
  return (
    <div className="p-5 lg:px-20">
      <h1 className="font-extrabold text-2xl pb-5">Activity</h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] font-extrabold">
              Date & Time
            </TableHead>
            <TableHead className="font-extrabold">Trading Coin</TableHead>
            <TableHead className="font-extrabold">BUY Price</TableHead>
            <TableHead className="font-extrabold">SELL Price</TableHead>
            <TableHead className="font-extrabold">Order Type</TableHead>
            <TableHead className="font-extrabold">Profit/Loss</TableHead>
            <TableHead className="text-right font-extrabold">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <p className="pr-4 text-slate-600">01/03/2004</p>
                <p className="text-gray-400 mt-1">12:43:12</p>
              </TableCell>
              <TableCell className="font-medium">
                <div className="flex items-center gap-1">
                  <Avatar>
                    <AvatarImage src="bitcoin-2136339_1280.png" />
                  </Avatar>
                  <span className="font-extrabold">Bitcoin</span>
                </div>
              </TableCell>
              <TableCell>98435243523</TableCell>
              <TableCell>98435234243523</TableCell>
              <TableCell>-0.000542</TableCell>
              <TableCell className="">$234.12f</TableCell>

              <TableCell className="text-right">$3.20</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Activity;
