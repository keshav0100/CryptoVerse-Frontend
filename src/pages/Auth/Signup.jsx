// src/pages/Auth/Signup.jsx
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

import { toast } from "sonner";
import { register as registerAction } from "@/State/Auth/Action";

// ✅ Zod schema with confirm-password match
const SignupSchema = z
  .object({
    fullName: z.string().min(2, "Full name is required"),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(6, "Minimum 6 characters"),
    confirmPassword: z.string().min(6, "Minimum 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((s) => s);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    const toastId = toast.loading("Creating account...");
    dispatch(
      registerAction({
        payload: {
          fullName: data.fullName,
          email: data.email,
          password: data.password,
        },
        navigate,
      })
    )
      ?.then(() =>
        toast.success("Account created successfully!", { id: toastId })
      )
      ?.catch((err) =>
        toast.error(err?.message || "Signup failed", { id: toastId })
      );
  };

  // show API errors from store
  useEffect(() => {
    if (auth?.error && !auth?.loading) {
      toast.error(
        typeof auth.error === "string"
          ? auth.error
          : "Signup failed. Try again."
      );
    }
  }, [auth?.error, auth?.loading]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Full Name */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Enter Full Name"
                  className="w-full p-3 rounded-md bg-[#0b1220]/80 border border-white/10
                             placeholder:text-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
                    autoComplete="new-password"
                    className="w-full p-3 pr-12 rounded-md bg-[#0b1220]/80 border border-white/10
                               placeholder:text-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
                    {...field}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white text-xl"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm Password (with live match status) */}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    autoComplete="new-password"
                    className="w-full p-3 pr-12 rounded-md bg-[#0b1220]/80 border border-white/10
                               placeholder:text-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
                    {...field}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white text-xl"
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showConfirmPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </FormControl>
              <FormMessage />

              {/* Live status under the input */}
              {(() => {
                const password = form.watch("password");
                const confirm = form.watch("confirmPassword");

                if (confirm && confirm.length > 0 && password !== confirm) {
                  return (
                    <p className="text-red-500 font-semibold text-center mt-2 animate-pulse">
                      ❌ Passwords do not match
                    </p>
                  );
                }

                if (confirm && confirm.length > 0 && password === confirm) {
                  return (
                    <p className="text-green-500 font-bold text-center mt-2 animate-fade-in">
                      ✅ Passwords match!
                    </p>
                  );
                }

                return null;
              })()}
            </FormItem>
          )}
        />

        {/* Submit */}
        <Button
          type="submit"
          disabled={auth?.loading}
          className="w-full py-3 font-semibold bg-[#3B5BFF] hover:bg-[#304de6]"
        >
          {auth?.loading ? "Creating account..." : "Register"}
        </Button>

        {/* Link to Signin */}
        <div className="text-center mt-3">
          <span className="text-gray-300">Already have an account?</span>
          <Link
            to="/signin"
            className="ml-2 underline underline-offset-4 hover:opacity-90 font-medium"
          >
            Login
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default Signup;
