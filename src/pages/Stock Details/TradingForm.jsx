import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DotIcon } from "lucide-react";
import React from "react";

const TradingForm = () => {
  const [orderType, setOrderType] = React.useState("BUY");
  const handleChange = (e) => {
    console.log("Amount entered:", e.target.value);
  };
  return (
    <div className="space-y-10 p-5">
      <div>
        <div className="flex items-center gap-4 justify-between">
          <Input
            placeholder="Enter amount"
            className="py-7 focus:outline-none"
            onChange={handleChange}
            type="number"
            name="amount"
          />
          <div>
            <p className="border text-2xl flex justify-center items-center w-36 h-14 rounded-md">
              3426
            </p>
          </div>
        </div>
        {true && (
          <h1 className="text-red-600 text-center mt-6">
            Insufficient wallet balance to buy
          </h1>
        )}
      </div>
      <div className="flex items-center gap-5">
        <div>
          <Avatar>
            <AvatarImage src="/bitcoin-2136339_1280.png" />
          </Avatar>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p>BTC</p>
            <DotIcon className="text-gray-600" />
            <p>Bitcoin</p>
          </div>
          <div className="flex items-end gap-2">
            <p className="text-xl font-bold">$2345</p>
            <p className="text-red-500">
              <span>-1345.324</span>
              <span>(-0.0053%)</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p>Order Type</p>
        <p>Market Order</p>
      </div>

      <div className="flex items-center justify-between">
        <p>{orderType === "BUY" ? "Available Cash" : "Available Quantity"}</p>
        <p>{orderType === "BUY" ? 4563 : 12}</p>
      </div>

      <div>
        <Button
          className={`font-extrabold w-full py-3 ${
            orderType === "BUY"
              ? "bg-green-600 hover:bg-green-700"
              : "bg-red-600 hover:bg-red-700"
          }`}
        >
          {orderType}
        </Button>

        <Button
          variant="link"
          className="font-extrabold w-full mt-5"
          onClick={() => setOrderType(orderType === "BUY" ? "SELL" : "BUY")}
        >
          {orderType === "BUY" ? "Or Sell" : "Or Buy"}
        </Button>
      </div>
    </div>
  );
};

export default TradingForm;
