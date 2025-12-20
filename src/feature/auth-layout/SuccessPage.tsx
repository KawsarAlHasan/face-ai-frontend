"use client";
import React, { useEffect } from "react";
import AuthLogo from "@/shared/AuthLogo";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

export default function SuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (mode === "register") {
        router.push("/dashboard");
      } else {
        router.push("/auth/login");
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [mode, router]);

  return (
    <div className="flex flex-col justify-between items-center h-full w-full">
      <AuthLogo />

      <div className="text-center">
        <h3 className="section-title ">
          {mode === "reset"
            ? "Réinitialisation du mot de passe"
            : "Inscription réussie"}
        </h3>
        <p className="text-sm text-[#7E7E7E]">
          {mode === "reset"
            ? "Vous avez réinitialisé votre mot de passe avec succès."
            : "Votre compte a été enregistré avec succès.."}
        </p>

        <div className="w-full pt-12 grow flex justify-center items-center">
          <Image
            src={"/assets/icons/auth/success-img.png"}
            alt="success"
            width={200}
            height={200}
            className="h-[165px] w-fit"
            draggable={false}
          />
        </div>
      </div>

      <div></div>
    </div>
  );
}
