"use client";
import React, { useRef, useState } from "react";
import { Form, Input, Button } from "antd";
import type { InputRef } from "antd";
import "./style.css";
import AuthLogo from "@/shared/AuthLogo";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { API } from "@/api-services/api";
import Cookies from "js-cookie";

export default function VerifyCodeForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const mode = searchParams.get("mode"); // register | forget
  const email = Cookies.get("email");

  const inputsRef = useRef<(InputRef | null)[]>([]);
  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const [loading, setLoading] = useState(false);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async () => {
    const finalCode = code.join("");

    if (finalCode.length !== 6) {
      toast.error("Please enter the full 6-digit code");
      return;
    }

    if (!email) {
      toast.error("Email not found. Please try again.");
      return;
    }

    setLoading(true);

    try {
      if (mode === "register") {
        const response = await API.post("/api/auth/active/user/", {
          email,
          code: finalCode,
        });

        Cookies.set("token", response?.data?.tokens?.access);

        toast.success("Account verified successfully!");
        router.push("/auth/success?mode=register");
      }

      if (mode === "forget") {
        const response = await API.post("/api/auth/verify_code/", {
          email,
          code: finalCode,
        });

        Cookies.set("code", finalCode);

        console.log(response, "response forget");

        toast.success("Code verified!");
        router.push("/auth/reset-password");
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Verification failed");
      console.error("Verification Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    try {
      const response = await API.post("/api/auth/forgot-password/", {
        email,
      });

      console.log(response, "response resend code");
      toast.success("Code resent successfully!");
    } catch (error) {
      toast.error("Failed to resend code. Please try again.");
      console.log(error, "error resend code");
    }
  };

  return (
    <div className="flex flex-col justify-between items-center h-full">
      <AuthLogo />

      <div className="text-center">
        <h3 className="section-title mb-2!">Verify Code</h3>

        <p className="text-sm text-[#7E7E7E]">
          Please enter the 6-digit verification code sent to your email:{" "}
          <strong>{email}</strong>.
        </p>

        <div className="w-full pt-12 grow">
          <Form layout="vertical" onFinish={handleSubmit}>
            <div className="flex justify-center gap-3 mb-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <Input
                  key={index}
                  maxLength={1}
                  inputMode="numeric"
                  className="custom-input text-center! w-12! h-12! text-lg!"
                  value={code[index]}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => {
                    inputsRef.current[index] = el;
                  }}
                />
              ))}
            </div>

            <Button
              htmlType="submit"
              loading={loading}
              className="h-10! w-full! lg:h-12! bg-linear-to-r! from-[#9810FA]! to-[#E60076]! shadow-none! mb-3 rounded-xl!"
            >
              Verify
            </Button>
          </Form>
        </div>
      </div>

      <p className="text-sm text-[#7E7E7E]">
        Didn’t receive a code?{" "}
        <button
          type="button"
          className="text-[#A855F7] underline cursor-pointer"
          onClick={handleResendCode}
        >
          Resend
        </button>
      </p>
    </div>
  );
}
