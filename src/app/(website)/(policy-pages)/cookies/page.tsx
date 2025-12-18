import { CookiesPrivacyContent } from "@/constants/policyContent";
import PolicyLayout from "@/shared/PolicyLayout";
import React from "react";

export default function page() {
  return (
    <PolicyLayout
      title="Cookies & Privacy"
      subtitle={"22 December, 2025"}
      content={CookiesPrivacyContent}
    />
  );
}
