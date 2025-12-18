import { TermsContent } from "@/constants/policyContent";
import PolicyLayout from "@/shared/PolicyLayout";
import React from "react";

export default function TermsPage() {
  return (
    <PolicyLayout
      title="Terms & Conditions"
      subtitle={"22 December, 2025"}
      content={TermsContent}
    />
  );
}
