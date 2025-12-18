"use client";
import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import "./style.css";
import AuthLogo from "@/shared/AuthLogo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { API } from "@/api-services/api";
import Cookies from "js-cookie";
import { toast } from "sonner";

export default function LoginForm() {
  const [form1] = Form.useForm();
  const router = useRouter();

  const handleLogin = async (values: any) => {
    try {
      const response = await API.post("/api/auth/login/", values);

      console.log(response, "response");

      const token = response.data.access;
      if (token) {
        toast.success("Login successful!");
        Cookies.set("token", token);
        router.push("/dashboard");
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.detail || "Login failed");
      console.log(error, "error");
    }
  };

  return (
    <div className="flex flex-col justify-between items-center h-full w-full">
      <AuthLogo />
      <div className="text-center w-full">
        <h3 className="section-title mb-2!">Sign In</h3>
        <p className="text-sm text-[#7E7E7E]">
          Enter your email and password to access your account
        </p>

        <div className="w-full pt-12 grow text-start!">
          <Form form={form1} layout="vertical" onFinish={handleLogin}>
            {/* Email */}
            <Form.Item
              label="Email"
              name="email"
              className="form-item"
              rules={[
                { required: true, message: "Email is required" },
                { type: "email", message: "Enter a valid email" },
              ]}
            >
              <Input placeholder="Enter your email" className="custom-input" />
            </Form.Item>

            {/* Password */}
            <Form.Item
              label="Password"
              name="password"
              className="form-item"
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input.Password
                placeholder="Enter your password"
                className="custom-input"
              />
            </Form.Item>

            {/* Remember + Forgot */}
            <div className="flex justify-between items-center mb-4">
              <Checkbox>Remember me</Checkbox>
              <Link
                href={"/auth/forget-password"}
                className="text-[#7E7E7E] text-sm hover:text-white transition cursor-pointer"
              >
                Forgot Password
              </Link>
            </div>

            {/* Sign In */}
            <Button
              htmlType="submit"
              className="h-10! w-full! lg:h-12! bg-linear-to-r! from-[#9810FA]!  to-[#E60076]! shadow-none! mb-3 rounded-xl!"
            >
              Sign In
            </Button>

            {/* Sign In with Google */}
            <Button
              block
              className="h-10! w-full! lg:h-12! bg-white! text-black! cursor-pointer shadow-none! mb-3 rounded-xl!"
            >
              <FcGoogle size={22} className="mr-2" />
              Sign In with Google
            </Button>

            {/* Sign In with Facebook */}
            <Button
              block
              className="h-10! w-full! lg:h-12! bg-white! text-black! cursor-pointer shadow-none! mb-3 rounded-xl!"
            >
              <FaFacebook size={20} className="mr-2 text-[#1877F2]" />
              Sign In with Facebook
            </Button>
          </Form>
        </div>
      </div>
      <p className="text-sm text-[#7E7E7E]">
        Don’t have an account?{" "}
        <Link href="/auth/register" className="text-[#A855F7] underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
