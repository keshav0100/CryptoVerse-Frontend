import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";

const PaymentDetailsForm = () => {
  const form = useForm({
    resolver: "",
    defaultValues: {
      accountHolderName: "",
      bankName: "",
      accountNumber: "",
      confirmAccountNumber: "",
      ifsc: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="px-10 py-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="accountHolderName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-extrabold">
                  Account Holder Name
                </FormLabel>
                <FormControl>
                  <Input
                    // name="accountHolderName"
                    className="w-full border border-gray-700 p-5"
                    placeholder="Enter account holder name"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bankName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-extrabold">Bank Name</FormLabel>
                <FormControl>
                  <Input
                    // name="ifsc"
                    className="w-full border border-gray-700 p-5"
                    placeholder="Enter bank name"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="accountNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-extrabold">Account Number</FormLabel>
                <FormControl>
                  <Input
                    // name="ifsc"
                    className="w-full border border-gray-700 p-5"
                    placeholder="**** **** 1234"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmAccountNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-extrabold">
                  Confirm Account Number
                </FormLabel>
                <FormControl>
                  <Input
                    // name="ifsc"
                    className="w-full border border-gray-700 p-5"
                    placeholder="**** **** 1234"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="ifsc"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-extrabold">IFSC Code</FormLabel>
                <FormControl>
                  <Input
                    // name="ifsc"
                    className="w-full border border-gray-700 p-5"
                    placeholder="Enter IFSC code"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <DialogClose className="w-full">
            <Button className="w-full py-5 font-extrabold" type="submit">
              Submit
            </Button>
          </DialogClose>
        </form>
      </Form>
    </div>
  );
};

export default PaymentDetailsForm;
