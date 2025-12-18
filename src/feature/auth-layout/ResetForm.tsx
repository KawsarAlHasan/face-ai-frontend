"use client";
import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import "./style.css";
import AuthLogo from "@/shared/AuthLogo";
import { useRouter } from "next/navigation";
import { API } from "@/api-services/api";
import { toast } from "sonner";
import Cookies from "js-cookie";

export default function ResetPasswordForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form] = Form.useForm();
  const router = useRouter();

  const email = Cookies.get("email");
  const code = Cookies.get("code");

  const onFinish = async (values: any) => {
    console.log("New Password:", values.newPassword);
    console.log("Confirm Password:", values.confirmPassword);

    setIsSubmitting(true);
    try {
      const payload = {
        email: email,
        code: code,
        new_password: values.newPassword,
        new_password2: values.confirmPassword,
      };
      const response = await API.post("/api/auth/set_new_password/", payload);
      console.log(response, "response");

      Cookies.remove("email");
      Cookies.remove("code");
      Cookies.set("token", response?.data?.tokens?.access);
      toast.success("Password updated successfully!");
      router.push("/dashboard");
    } catch (error: any) {
      console.log(error, "error");
      toast.error(
        error?.response?.data?.non_field_errors
          ? error?.response?.data?.non_field_errors[0]
          : "Something went wrong"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col justify-between items-center h-full w-full">
      <AuthLogo />

      <div className="text-center">
        <h3 className="section-title ">Reset Your Password</h3>
        <p className="text-sm text-[#7E7E7E]">
          Enter your new password to reset your account.
        </p>

        <div className="w-full pt-12 grow text-start!">
          <Form form={form} layout="vertical" onFinish={onFinish}>
            {/* New Password */}
            <Form.Item
              label="New Password"
              name="newPassword"
              rules={[
                { required: true, message: "Please enter your new password" },
              ]}
              className="form-item"
            >
              <Input.Password
                placeholder="Enter new password"
                className="custom-input"
              />
            </Form.Item>

            {/* Confirm Password */}
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={["newPassword"]}
              rules={[
                { required: true, message: "Please confirm your password" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject("Passwords do not match");
                  },
                }),
              ]}
              className="form-item"
            >
              <Input.Password
                placeholder="Confirm new password"
                className="custom-input"
              />
            </Form.Item>

            {/* Reset Button */}
            <Button
              loading={isSubmitting}
              htmlType="submit"
              className="h-10! w-full! lg:h-12! bg-linear-to-r! from-[#9810FA]! to-[#E60076]! shadow-none! mb-3 rounded-xl!"
            >
              Reset Password
            </Button>
          </Form>
        </div>
      </div>
      {/* empty div */}
      <div></div>
    </div>
  );
}
