import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Button } from "@/components/ui/button";
import PaymentDetailsForm from "./PaymentDetailsForm";

const PaymentDetails = () => {
  return (
    <div className="px-20">
      <h1 className="text-3xl py-10 font-extrabold">Payment Details</h1>
      {false ? (
        <Card>
          <CardHeader>
            <CardTitle>ICICI Bank</CardTitle>
            <CardDescription>Account Number ****456</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <p className="w-32">A/C Holder : </p>
              <p className="w-32">Keshav Bansal</p>
            </div>
            <div className="flex items-center">
              <p className="w-32">IFSC</p>
              <p className="text-gray-500">ICICI0009</p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Dialog>
          <DialogTrigger>
            <Button className="py-2 font-extrabold">Add payment details</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="font-extrabold text-center">
                Payment Details
              </DialogTitle>
            </DialogHeader>
            <PaymentDetailsForm />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default PaymentDetails;
