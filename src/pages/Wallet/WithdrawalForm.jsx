import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React from "react";

const WithdrawalForm = () => {
  const [amount, setAmount] = React.useState("");
  const [paymentMethod, setPaymentMethod] = React.useState("RAZORPAY");
  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };
  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Amount:", amount);
  };

  return (
    <div className="pt-10 space-y-5">
      <div className="flex justify-between items-center rounded-md text-xl font-extrabold px-5 py-4">
        <p>Available Balance</p>
        <p>$23.12</p>
      </div>
      <div className="flex flex-col items-center">
        <h1>Enter Withdrawal Amount</h1>
        <div className="flex items-center justify-center">
          <Input
            onChange={handleChange}
            value={amount}
            className="pt-2 withdrawalInput py-7 border-none outline-none focus:outline-none px-0 text-3xl text-center"
            placeholder="$100.00"
            type="number"
          />
        </div>
      </div>
      <div>
        <p className="pb-2">Transfer To</p>
        <div className="flex items-center gap-5 border px-5 py-2 rounded-md">
          <img
            className="h-8 w-8"
            src="public/bank-988164_1920.png"
            alt="bank"
          />
          <div>
            <p className="text-xl font-bold">ICICI Bank</p>
            <p className="text-sm">Account Number: 1234567890</p>
          </div>
        </div>
      </div>
      <DialogClose className="w-full">
        <Button
          onClick={handleSubmit}
          className="w-full font-extrabold py-5 text-md"
        >
          Withdraw
        </Button>
      </DialogClose>
    </div>
  );
};

export default WithdrawalForm;
