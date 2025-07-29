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
import { Eye, EyeOff } from "lucide-react";

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const form = useForm({
    resolver: "",
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="px-5 py-2 ">
      <h1 className="text-md font-bold text-center mb-2">Forgot Password</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-full border border-gray-700 p-5 placeholder:text-gray-700"
                    placeholder="Enter Email"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full py-5 font-extrabold" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ForgotPassword;
