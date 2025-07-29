import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React from "react";

const TransferForm = () => {
  const [formData, setFormData] = React.useState({
    amount: "",
    walletId: "",
    purpose: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Transfer Details:", formData);
    };
  return (
    <div className="pt-10 space-y-5">
      <div>
        <h1 className="pb-1">Enter Transfer Amount</h1>
        <Input
          name="amount"
          onChange={handleChange}
          value={formData.amount}
          className="py-7 "
          placeholder="Please enter amount"
        />
      </div>
      <div>
        <h1 className="pb-1">Enter Wallet ID</h1>
        <Input
          name="walletId"
          onChange={handleChange}
          value={formData.walletId}
          className="py-7 "
          placeholder="Please enter wallet ID"
        />
      </div>
      <div>
        <h1 className="pb-1">Purpose</h1>
        <Input
          name="purpose"
          onChange={handleChange}
          value={formData.purpose}
          className="py-7 "
          placeholder="Please enter purpose"
        />
      </div>
      <DialogClose className="w-full">

      <Button onClick={handleSubmit} className="w-full font-extrabold">Submit Transfer</Button>
      </DialogClose>
    </div>
  );
};

export default TransferForm;
