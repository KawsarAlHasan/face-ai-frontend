"use client";

import { useState } from "react";
import { Form, Radio, Button } from "antd";
import { useRouter } from "next/navigation";

export default function GenderForm() {
  const [gender, setGender] = useState("");
  const router = useRouter();

  const goNext = () => {
    router.push("/onboarding/age");
  };

  return (
    <div className="w-full max-w-md bg-[#0C0C0D] backdrop-blur-xl rounded-2xl p-8 boxShadow">
      <h2 className="text-center text-2xl lg:text-3xl font-semibold text-white mb-2">
        What’s your gender?
      </h2>

      <p className="text-center text-sm text-gray-400 mb-6">
        Your gender helps the AI provide more accurate and personalized
        recommendations.
      </p>

      <Form layout="vertical">
        {/* MALE */}
        <div
          className={`
            flex items-center justify-between 
            px-4 py-2 rounded-xl cursor-pointer mb-3 transition
            bg-white/10 border 
            ${gender === "male" ? "border-purple-500" : "border-white/10"}
          `}
          onClick={() => {
            setGender("male");
            goNext();
          }}
        >
          <span className="text-white text-base">Male</span>

          <Radio
            value="male"
            checked={gender === "male"}
            onChange={(e) => {
              setGender(e.target.value);
              goNext();
            }}
            className="custom-radio"
          />
        </div>

        {/* FEMALE */}
        <div
          className={`
            flex items-center justify-between 
            px-4 py-2 rounded-xl cursor-pointer mb-6 transition
            bg-white/10 border 
            ${gender === "female" ? "border-purple-500" : "border-white/10"}
          `}
          onClick={() => {
            setGender("female");
            goNext();
          }}
        >
          <span className="text-white text-base">Female</span>

          <Radio
            value="female"
            checked={gender === "female"}
            onChange={(e) => {
              setGender(e.target.value);
              goNext();
            }}
            className="custom-radio"
          />
        </div>

        <Button
          onClick={goNext}
          className="h-10! w-full! lg:h-12! bg-linear-to-r! from-[#9810FA]! to-[#E60076]! shadow-none! mb-3 rounded-xl! border-0! text-white!"
        >
          Skip
        </Button>
      </Form>

      {/* INLINE CUSTOM CSS */}
      <style jsx>{`
        .custom-radio .ant-radio-inner {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border-width: 2px;
          background: transparent;
          border-color: #9b59ff !important;
        }

        .custom-radio .ant-radio-checked .ant-radio-inner:after {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-left: -5px;
          margin-top: -5px;
          background: #9b59ff !important;
        }

        .custom-radio .ant-radio-input:focus + .ant-radio-inner {
          box-shadow: none !important;
        }
      `}</style>
    </div>
  );
}
