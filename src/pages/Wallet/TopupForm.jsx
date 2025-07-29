import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import React from "react";
import { DollarSign } from "lucide-react";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const TopupForm = () => {
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
    console.log("Payment Method:", paymentMethod);
  };
  return (
    <div className="pt-10 space-y-5">
      <div>
        <h1 className="pb-1">Enter Amount</h1>
        <Input
          onChange={handleChange}
          value={amount}
          className="py-7 text-lg"
          placeholder="Please enter amount"
        />
      </div>

      <div>
        <h1 className="pb-1">Select Payment Method</h1>
        <RadioGroup
          onValueChange={(value) => {
            handlePaymentMethodChange(value);
          }}
          className="flex mt-4"
          defaultValue="RAZORPAY"
        >
          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md flex-1 min-w-0">
            <RadioGroupItem
              icon={DotFilledIcon}
              className="h-7 w-7"
              value="RAZORPAY"
              id="r1"
            />
            <Label htmlFor="r1" className="flex-1 min-w-0">
              <div className="bg-white rounded-md px-5 py-2 w-full flex items-center justify-center min-w-0">
                <img
                  className="h-7 w-full object-contain"
                  src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg"
                  alt="Razorpay"
                />
              </div>
            </Label>
          </div>

          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md flex-1 min-w-0">
            <RadioGroupItem
              icon={DotFilledIcon}
              className="h-7 w-7"
              value="STRIPE"
              id="r2"
            />
            <Label htmlFor="r2" className="flex-1 min-w-0">
              <div className="bg-white rounded-md px-5 py-2 w-full flex items-center justify-center min-w-0">
                <img
                  className="h-7 w-full object-contain"
                  src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
                  alt="Stripe"
                />
              </div>
            </Label>
          </div>
        </RadioGroup>
      </div>
      <Button
        onClick={handleSubmit}
        className="w-full mt-5 font-extrabold"
        variant="default"
      >
        Submit
      </Button>
    </div>
  );
};

export default TopupForm;
