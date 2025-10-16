import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { BookmarkIcon, DotIcon } from "lucide-react";
import React, { useEffect } from "react";
import TradingForm from "./TradingForm";
import StockChart from "../Home/StockChart";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "@/State/Coin/Action";
import { store } from "@/State/Store";

const StockDetails = () => {
  const { coin } = useSelector((store) => store);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    console.log("Fetching coin details for ID:", id);
    dispatch(
      fetchCoinDetails({ coinId: id, jwt: localStorage.getItem("jwt") })
    );
  }, [id, dispatch]);

  // 🔥 Log after data is stored in Redux
  useEffect(() => {
    if (coin?.coinDetails) {
      console.log("🔥 Full Coin Details:", coin.coinDetails);
      console.log("Name ➤", coin.coinDetails.name);
      console.log("Symbol ➤", coin.coinDetails.symbol);
      console.log("Price ➤", coin.coinDetails?.market_data?.current_price?.usd);
    }
  }, [coin]);

  const capChangePercent =
    coin.coinDetails?.market_data?.market_cap_change_percentage_24h;
  const capChangeValue =
    coin.coinDetails?.market_data?.market_cap_change_24h_in_currency?.inr; // ✅ adjust to `.usd` if needed

  const isNegative = capChangePercent < 0;

  const priceDropUSD =
    coin.coinDetails?.market_data?.price_change_24h_in_currency?.usd;
  const priceDropPercent =
    coin.coinDetails?.market_data?.price_change_percentage_24h;
  const isPriceNegative = priceDropUSD < 0;

  return (
    <div className="p-5 mt-5">
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <div>
            <Avatar>
              <AvatarImage src={coin.coinDetails?.image.large} />
            </Avatar>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p>{coin.coinDetails?.name}</p>
              <DotIcon className="text-gray-600" />
              <p>{coin.coinDetails?.symbol.toUpperCase()}</p>
            </div>
            <div className="flex items-end gap-2">
              <p className="text-xl font-extrabold">
                ${" "}
                {coin.coinDetails?.market_data?.current_price?.usd.toLocaleString(
                  "en-US"
                )}
              </p>
              <p
                className={`${
                  isNegative ? "text-red-500" : "text-green-500"
                } font-extrabold`}
              >
                <span>${priceDropUSD ? priceDropUSD.toFixed(2) : "--"}</span>
                <span>
                  (
                  {
                    coin.coinDetails?.market_data
                      ?.market_cap_change_percentage_24h
                  }
                  ) %
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button>
            {true ? (
              <BookmarkFilledIcon className="h-6 w-6" />
            ) : (
              <BookmarkIcon className="h-6 w-6" />
            )}
          </Button>
          <Dialog>
            <DialogTrigger>
              <Button className="lg font-extrabold">Trade</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>How much do you want to spend?</DialogTitle>
              </DialogHeader>
              <TradingForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-14">
        <StockChart coinId={id} />
      </div>
    </div>
  );
};

export default StockDetails;
