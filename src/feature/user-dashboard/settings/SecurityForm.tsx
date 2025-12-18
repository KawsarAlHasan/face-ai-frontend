"use client";
import React from "react";
import { Form, Input, Button } from "antd";
import "./style.css";
import { toast } from "sonner";
import { fetcherWithTokenPost } from "@/api-services/api";

const SecurityForm = () => {
  const [form2] = Form.useForm();

  const onFinish = async (values: any) => {
    console.log("Form Values:", values);

    try {
      const res = await fetcherWithTokenPost("/api/auth/change-password/", {
        old_password: values.currentPassword,
        new_password: values.password,
        confirm_password: values.confirmPassword,
      });
      console.log(res, "res");
      toast.success("Password updated successfully!");
    } catch (error) {
      toast.error("Failed to update password. Please try again.");
      console.log(error, "error");
    }
  };

  return (
    <Form form={form2} layout="vertical" onFinish={onFinish}>
      {/* Current Password */}
      <Form.Item
        label="Current Password"
        name="currentPassword"
        className="form-item"
        rules={[{ required: true, message: "Current password is required" }]}
      >
        <Input.Password placeholder="**************" className="custom-input" />
      </Form.Item>

      {/* New Password */}
      <Form.Item
        label="Password"
        name="password"
        className="form-item"
        rules={[
          { required: true, message: "Password is required" },
          {
            pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
            message:
              "Password must be at least 8 characters and contain 1 uppercase letter, 1 number, and 1 special character",
          },
        ]}
      >
        <Input.Password
          placeholder="Enter your password"
          className="custom-input"
        />
      </Form.Item>

      {/* Re-New Password */}
      <Form.Item
        label="Re-New Password"
        name="confirmPassword"
        className="form-item"
        dependencies={["password"]}
        rules={[
          { required: true, message: "Please confirm your password" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Passwords do not match"));
            },
          }),
        ]}
      >
        <Input.Password placeholder="**************" className="custom-input" />
      </Form.Item>

      {/* Save Button */}
      <Button type="primary" className="save-button" htmlType="submit">
        Save Changes
      </Button>
    </Form>
  );
};

export default SecurityForm;
