// import React from 'react'

// const Signin = () => {
//   return (
//     <div>Signin</div>
//   )
// }

// export default Signin

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
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/State/Auth/Action";
import { useNavigate, Link } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const [showPassword, setShowPassword] = React.useState(false);
  const form = useForm({
    resolver: "",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    dispatch(login({ data, navigate }));
    console.log(data);
  };
  return (
    <div className="min-h-screen flex items-center justify-center py-8">
      <div className="w-full max-w-md p-8 bg-white/80 dark:bg-black/60 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-2 text-black">CryptoVerse</h1>
        <h2 className="text-xl font-semibold text-center mb-6 text-gray-700">Login</h2>
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
          {/* confirmPassword removed for login */}

          <Button
            className="w-full py-5 font-extrabold"
            type="submit"
            disabled={auth.loading}
          >
            {auth.loading ? "Loading..." : "Submit"}
          </Button>
          </form>
        </Form>
        
        <div className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="font-semibold text-blue-600 hover:text-blue-500">
            Sign Up
          </Link>
        </div>
        
        <div className="mt-3 text-center">
          <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500 font-medium">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
