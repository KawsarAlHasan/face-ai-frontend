import { PrivacyPolicyContent } from "@/constants/policyContent";
import PolicyLayout from "@/shared/PolicyLayout";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      subtitle={"22 December, 2025"}
      content={PrivacyPolicyContent}
    />
  );
}
