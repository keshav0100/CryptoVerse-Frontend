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
import { useDispatch } from "react-redux";
import { register } from "@/State/Auth/Action";


const Signup = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const form = useForm({
    resolver: "",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = (data) => {
    dispatch(register(data));
    console.log(data);
  };
  return (
    <div className="px-5 py-2">
      <h1 className="text-xl font-bold text-center mb-2">Register</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter Full Name"
                    className="w-full border placeholder:text-gray-700 border-gray-700 p-5"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

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

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      className="w-full border border-gray-700 p-5 placeholder:text-gray-700 pr-12"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-gray-900"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Confirm Password"
                      type={showConfirmPassword ? "text" : "password"}
                      className="w-full border border-gray-700 p-5 placeholder:text-gray-700 pr-12"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-gray-900"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
                  </div>
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

export default Signup;
