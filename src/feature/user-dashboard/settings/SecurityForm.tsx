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
        label="Mot de passe actuel"
        name="currentPassword"
        className="form-item"
        rules={[{ required: true, message: "Le mot de passe actuel est requis." }]}
      >
        <Input.Password placeholder="**************" className="custom-input" />
      </Form.Item>

      {/* New Password */}
      <Form.Item
        label="Mot de passe"
        name="password"
        className="form-item"
        rules={[
          { required: true, message: "Un mot de passe est requis." },
          {
            pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
            message:
              "Le mot de passe doit comporter au moins 8 caractères et inclure 1 lettre majuscule, 1 chiffre et 1 caractère spécial.",
          },
        ]}
      >
        <Input.Password
          placeholder="Saisissez votre mot de passe"
          className="custom-input"
        />
      </Form.Item>

      {/* Re-New Password */}
      <Form.Item
        label="Nouveau mot de passe"
        name="confirmPassword"
        className="form-item"
        dependencies={["password"]}
        rules={[
          { required: true, message: "Veuillez confirmer votre mot de passe" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Les mots de passe ne correspondent pas."));
            },
          }),
        ]}
      >
        <Input.Password placeholder="**************" className="custom-input" />
      </Form.Item>

      {/* Save Button */}
      <Button type="primary" className="save-button2" htmlType="submit">
        Enregistrer les modifications
      </Button>
    </Form>
  );
};

export default SecurityForm;
