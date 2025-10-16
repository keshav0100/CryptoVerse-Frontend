import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import AssetTable from "./AssetTable";
import StockChart from "./StockChart";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { DotIcon, MessageCircle } from "lucide-react";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { getCoinList, getTop50CoinList } from "@/State/Coin/Action";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [category, setCategory] = React.useState("all");
  const [inputValue, setInputValue] = React.useState("");
  const [isBotRelease, setIsBotRelease] = React.useState(false);
  const { coin } = useSelector((store) => store);
  const dispatch = useDispatch();
  const handleBotRelease = () => setIsBotRelease(!isBotRelease);
  const handleCategoryChange = (value) => {
    setCategory(value);
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("Enter key pressed:", inputValue);
    }
    setInputValue("");
  };
  useEffect(() => {
    dispatch(getTop50CoinList());
  }, [category]);

  useEffect(() => {
    dispatch(getCoinList(1));
  }, []);
  return (
    <div className="relative">
      <div className="lg:flex">
        <div className="lg:w-[50%] lg:border-r">
          <div className="p-3 flex items-center gap-4">
            <Button
              onClick={() => handleCategoryChange("all")}
              variant={category === "all" ? "default" : "outline"}
              className="rounded-full font-extrabold"
            >
              All
            </Button>
            <Button
              onClick={() => handleCategoryChange("top50")}
              variant={category === "top50" ? "default" : "outline"}
              className="rounded-full font-extrabold"
            >
              Top 50
            </Button>
            <Button
              onClick={() => handleCategoryChange("topGainers")}
              variant={category === "topGainers" ? "default" : "outline"}
              className="rounded-full font-extrabold"
            >
              Top Gainers
            </Button>
            <Button
              onClick={() => handleCategoryChange("topLosers")}
              variant={category === "topLosers" ? "default" : "outline"}
              className="rounded-full font-extrabold"
            >
              Top Losers
            </Button>
          </div>
          <AssetTable
            coin={category == "all" ? coin.coinList : coin.top50}
            category={category}
          />
        </div>
        <div className="hidden lg:block lg:w-[50%] p-5">
          <StockChart />
          <div className="flex gap-5 items-center">
            <div>
              <Avatar>
                <AvatarImage src="bitcoin-2136339_1280.png" />
              </Avatar>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <p>ETH</p>
                <DotIcon className="text-grey-400" />
                <p className="text-grey-400">Ethereum</p>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-xl ">5464</p>
                <p className="text-red-500">
                  <span>-12.234</span>
                  <span>(-4.33%)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="absolute bottom-5 right-7 z-40 flex flex-col justify-end items-end gap-2">
        {isBotRelease && (
          <div className="w-[20rem] md:w-[20rem] lg:w-[20rem] h-[70vh] bg-slate-100">
            <div className="flex justify-between items-center px-6 h-[12%] bg-red border-b">
              <p className="font-extrabold">Chat Bot</p>
              <Button
                onClick={handleBotRelease}
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2"
              >
                <Cross1Icon />
              </Button>
            </div>

            <div className="h-[76%] flex flex-col overflow-y-auto gap-5 px-5 py-2 scroll-container ">
              <div className="self-start pb-5 w-auto">
                <div className="justify-end self-end px-5 py-2 bg-slate-300 rounded-md">
                  <p>Hi </p>
                </div>
              </div>

              {[1, 1, 1, 1].map((item, index) => (
                <div
                  key={index}
                  className={`${
                    index % 2 == 0 ? "self-start" : "self-end"
                  } pb-5 w-auto`}
                >
                  {index % 2 == 0 ? (
                    <div className="justify-end self-end px-5 py-2 bg-slate-300 rounded-md">
                      <p>Hi 2</p>
                    </div>
                  ) : (
                    <div className="justify-end self-end px-5 py-2 bg-slate-300 rounded-md">
                      <p>Hi 3</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="h-[12%] border-t">
              <Input
                className="w-full h-full order-none outline-none"
                placeholder="Enter your prompt here"
                onChange={handleChange}
                value={inputValue}
                onKeyPress={handleKeyPress}
              />
            </div>
          </div>
        )}
        <div className="relative w-[10rem] cursor-pointer group">
          <Button
            onClick={handleBotRelease}
            className="w-full h-[3rem] gap-4 items-center"
          >
            <MessageCircle size={30} className="-rotate-90" />
            <span className="font-extrabold text-sm">Chat Bot</span>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
