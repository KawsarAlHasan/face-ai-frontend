"use client";
import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import "./style.css";
import AuthLogo from "@/shared/AuthLogo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { API } from "@/api-services/api";
import { toast } from "sonner";
import Cookies from "js-cookie";

export default function ForgetPasswordForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  const [form] = Form.useForm();
  const handleSubmit = async (values: any) => {
    setIsSubmitting(true);
    try {
      const response = await API.post("/api/auth/forgot-password/", values);
      console.log(response, "response");
      toast.success("Email sent successfully!");
      Cookies.set("email", values.email);
      router.push("/auth/verify-code?mode=forget");
    } catch (error: any) {
      console.log(error, "error");
      toast.error(error?.response?.data?.email[0] || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="flex flex-col justify-between items-center h-full w-full">
      <AuthLogo />

      <div className="text-center">
        <h3 className="section-title ">Forget Password</h3>
        <p className="text-sm text-[#7E7E7E]">
          Submit your email to reset your account password.
        </p>

        <div className="w-full pt-12 grow text-start!">
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
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

            {/* Submit */}
            <Button
              htmlType="submit"
              loading={isSubmitting}
              className="h-10! w-full! lg:h-12! bg-linear-to-r! from-[#9810FA]!  to-[#E60076]! shadow-none! mb-3 rounded-xl!"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>

      <p className="text-sm text-[#7E7E7E]">
        Remember your password?{" "}
        <Link href="/auth/login" className="text-[#A855F7] underline">
          Sign In
        </Link>
      </p>
    </div>
  );
}
