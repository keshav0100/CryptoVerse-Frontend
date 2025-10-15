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
import { register } from "@/State/Auth/Action";
import toast from "react-hot-toast";

const Signup = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
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
    // Validate passwords match on the client before dispatching
    if (data.password !== data.confirmPassword) {
      // Shouldn't happen because button is disabled, but keep safeguard
      toast.error("Passwords do not match", { position: "top-right" });
      return;
    }

    // Only send the fields the backend needs
    const payload = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    };

    dispatch(register(payload));
    console.log(payload);
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('/CrytoVerse.png')` }}
    >
      <div className="w-full max-w-md p-8 bg-white/80 dark:bg-black/60 rounded-lg shadow-md">
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
                {/* Inline mismatch message - visible while user types */}
                {(() => {
                  const password = form.watch("password");
                  const confirm = form.watch("confirmPassword");
                    if (confirm && confirm.length > 0 && password !== confirm) {
                      return (
                        <div className="mt-2 flex justify-center" role="alert" aria-live="assertive">
                            <span className="text-red-500 font-extrabold">Passwords do not match</span>
                        </div>
                      );
                  }

                  // show attractive success pill when passwords match
                  if (confirm && confirm.length > 0 && password === confirm) {
                      return (
                        <div className="mt-2 flex justify-center" role="status" aria-live="polite">
                          <span className="text-green-600 font-extrabold">Passwords match</span>
                        </div>
                      );
                  }

                  return null;
                })()}
              </FormItem>
            )}
          />

          {(() => {
            const fullName = form.watch("fullName");
            const email = form.watch("email");
            const password = form.watch("password");
            const confirm = form.watch("confirmPassword");
            const allFilled = fullName && email && password && confirm;
            const passwordsMatch = password === confirm;
            const canSubmit = allFilled && passwordsMatch && !auth.loading;

            return (
              <Button
                className="w-full py-5 font-extrabold"
                type="submit"
                disabled={!canSubmit}
                aria-disabled={!canSubmit}
              >
                {auth.loading ? "Loading..." : "Submit"}
              </Button>
            );
          })()}
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
