"use client";
import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "./style.css";
import AuthLogo from "@/shared/AuthLogo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { API } from "@/api-services/api";
import Cookies from "js-cookie";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [form] = Form.useForm();

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      const payload = {
        email: values.email,
        full_name: values.name,
        phone_number: "",
        password: values.password,
        password2: values.password,
      };

      const response = await API.post("/api/auth/register/", payload);
      console.log(response, "response");

      if (response.status === 201) {
        Cookies.set("email", values.email);
        toast.success("Inscription réussie!");
        router.push("/auth/verify-code?mode=register");
      }
    } catch (error: any) {
      console.log(error, "error");
      toast.error(error?.response?.data?.email[0] || "L'inscription a échoué");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-between items-center h-full w-full">
      <AuthLogo />

      <div className="text-center w-full!">
        <h3 className="section-title mb-2!">S'inscrire</h3>
        <p className="text-sm text-[#7E7E7E]">
          Inscrivez-vous avec votre adresse e-mail et votre mot de passe pour
          commencer.
        </p>

        <div className="w-full pt-12 grow text-start!">
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            {/* Name */}
            <Form.Item
              label="Nom"
              name="name"
              className="form-item"
              rules={[{ required: true, message: "Le nom est requis." }]}
            >
              <Input placeholder="Entrez votre nom" className="custom-input" />
            </Form.Item>

            {/* Email */}
            <Form.Item
              label="E-mail"
              name="email"
              className="form-item"
              rules={[
                {
                  required: true,
                  message: "L'adresse électronique est requise.",
                },
                {
                  type: "email",
                  message: "Veuillez saisir une adresse e-mail valide.",
                },
              ]}
            >
              <Input
                placeholder="Saisissez votre adresse e-mail"
                className="custom-input"
              />
            </Form.Item>

            {/* Password */}
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

            {/* Terms Agreement */}
            <Form.Item
              name="agree"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                          "Vous devez accepter les conditions et la politique de confidentialité."
                        ),
                },
              ]}
            >
              <Checkbox className="text-[#7E7E7E] text-sm">
                J'accepte les conditions générales et la politique de
                confidentialité
              </Checkbox>
            </Form.Item>

            {/* Sign Up Button */}
            <Button
              loading={loading}
              htmlType="submit"
              className="h-10! w-full! lg:h-12! bg-linear-to-r! from-[#9810FA]!  to-[#E60076]! shadow-none! mb-3 rounded-xl!"
            >
              S'inscrire
            </Button>
          </Form>
        </div>
      </div>

      <p className="text-sm text-[#7E7E7E]">
        Vous avez déjà un compte?{" "}
        <Link href="/auth/login" className="text-[#A855F7] underline">
          Se connecter
        </Link>
      </p>
    </div>
  );
}
