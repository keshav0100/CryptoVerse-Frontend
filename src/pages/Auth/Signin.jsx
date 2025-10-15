import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

import { toast } from "sonner"; // ✅ Clean toast
import { login } from "@/State/Auth/Action";

// ✅ Validation
const SigninSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Min 6 characters"),
});

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((state) => state);

  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(SigninSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data) => {
    const toastId = toast.loading("Signing in...");
    dispatch(login({ data, navigate }))
      ?.then(() => toast.success("Welcome back!", { id: toastId }))
      ?.catch((err) =>
        toast.error(err?.message || "Login failed", { id: toastId })
      );
  };

  // Listen for auth change (login success/failure)
  useEffect(() => {
    if (auth.error && !auth.loading) {
      toast.error(
        typeof auth.error === "string" ? auth.error : "Login failed. Try again."
      );
    }
  }, [auth.error, auth.loading]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter Email"
                  autoComplete="email"
                  className="w-full p-3 rounded-md bg-[#0b1220]/80 border border-white/10
                             placeholder:text-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
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
                    autoComplete="current-password"
                    className="w-full p-3 pr-12 rounded-md bg-[#0b1220]/80 border border-white/10
                               placeholder:text-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
                    {...field}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit */}
        <Button
          type="submit"
          disabled={auth?.loading}
          className="w-full py-3 font-semibold bg-[#3B5BFF] hover:bg-[#304de6]"
        >
          {auth?.loading ? "Signing in..." : "Login"}
        </Button>

        {/* Links */}
        <div className="text-center mt-3">
          <span className="text-gray-300">Don't have an account?</span>
          <Link
            to="/signup"
            className="ml-2 underline underline-offset-4 hover:opacity-90 font-medium"
          >
            Sign Up
          </Link>
        </div>

        <div className="text-center mt-2">
          <Link
            to="/forgot-password"
            className="text-sm underline opacity-80 hover:opacity-100"
          >
            Forgot Password?
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default Signin;
