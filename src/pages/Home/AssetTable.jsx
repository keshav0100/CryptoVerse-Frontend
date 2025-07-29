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
import { useNavigate } from "react-router-dom";

const AssetTable = () => {
  const navigate = useNavigate();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] font-extrabold">Coin</TableHead>
          <TableHead className="font-extrabold">SYMBOL</TableHead>
          <TableHead className="font-extrabold">VOLUME</TableHead>
          <TableHead className="font-extrabold">MARKET CAP</TableHead>
          <TableHead className="font-extrabold">24 Hour</TableHead>
          <TableHead className="text-right font-extrabold">PRICE</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
          <TableRow onClick={() => navigate(`/market/bitcoin`)} key={index} className="cursor-pointer">
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
  );
};

export default AssetTable;
