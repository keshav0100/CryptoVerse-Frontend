import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Portfolio = () => {
  return (
    <div className="p-5 lg:px-20">
      <h1 className="font-extrabold text-2xl pb-5">Portfolio</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] font-extrabold">Asset</TableHead>
            <TableHead className="font-extrabold">PRICE</TableHead>
            <TableHead className="font-extrabold">UNIT</TableHead>
            <TableHead className="font-extrabold">Change</TableHead>
            <TableHead className="font-extrabold">Change (%)</TableHead>
            <TableHead className="text-right font-extrabold">VOLUME</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-1">
                  <Avatar>
                    <AvatarImage src="bitcoin-2136339_1280.png" />
                  </Avatar>
                  <span className="font-extrabold">Bitcoin</span>
                </div>
              </TableCell>
              <TableCell>BTC</TableCell>
              <TableCell>98435243523</TableCell>
              <TableCell>98435234243523</TableCell>
              <TableCell>-0.000542</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Portfolio;
