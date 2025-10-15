import React, { useEffect } from "react";
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
import { useDispatch } from "react-redux";
import { getCoinList } from "@/State/Coin/Action";
// import { useEffect } from "react";

const AssetTable = ({ coin, category }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(getCoinList());
  // }, [dispatch]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] font-extrabold">Coin</TableHead>
          <TableHead className="font-extrabold">SYMBOL</TableHead>
          <TableHead className="font-extrabold">VOLUME</TableHead>
          <TableHead className="font-extrabold">MARKET CAP</TableHead>
          <TableHead className="font-extrabold">Last 24 Hour Percentage</TableHead>
          <TableHead className="text-right font-extrabold">PRICE</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {coin.map((item, index) => (
          <TableRow
            onClick={() => navigate(`/market/${item.id} `)}
            key={item.id}
            className="cursor-pointer"
          >
            <TableCell className="font-medium">
              <div className="flex items-center gap-1">
                <Avatar>
                  <AvatarImage src={item.image} />
                </Avatar>
                <span className="font-extrabold">{item.name}</span>
              </div>
            </TableCell>
            <TableCell>{item.symbol}</TableCell>
            <TableCell>{item.total_volume}</TableCell>
            <TableCell>{item.market_cap}</TableCell>
            <TableCell>{item.market_cap_change_percentage_24h}</TableCell>
            <TableCell className="text-right">$ {item.current_price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AssetTable;
