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

const Withdrawal = () => {
  return (
    <div className="p-5 lg:px-20">
      <h1 className="font-extrabold text-2xl pb-5">Withdrawal</h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="font-extrabold py-3">Date</TableHead>
            <TableHead className="font-extrabold">Method</TableHead>
            <TableHead className="font-extrabold">Amount</TableHead>
            <TableHead className="font-extrabold text-right ">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              <TableCell>28-07-2025</TableCell>
              <TableCell>Account</TableCell>
              <TableCell>$12.23</TableCell>

              <TableCell className="text-right">Success</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Withdrawal;
