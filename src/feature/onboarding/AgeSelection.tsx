"use client";

import { useState } from "react";
import { Form, Radio, Button } from "antd";
import { useRouter } from "next/navigation";

export default function AgeForm() {
  const [age, setAge] = useState("");
  const router = useRouter();

  const goNext = () => {
    router.push("/onboarding/plan");
  };

  const ageOptions = ["18-19", "20-24", "25-29", "30-34", "35+"];

  return (
    <div className="w-full max-w-md bg-[#0C0C0D] backdrop-blur-xl rounded-2xl p-8 boxShadow">
      <h2 className="text-center text-2xl lg:text-3xl font-semibold text-white mb-2">
        How old are you?
      </h2>

      <p className="text-center text-sm text-gray-400 mb-6">
        Your age helps the AI generate more precise analysis and
        recommendations.
      </p>

      <Form layout="vertical">
        {ageOptions.map((item) => (
          <div
            key={item}
            className={`
              flex items-center justify-between 
              px-4 py-2 rounded-xl cursor-pointer mb-3 transition
              bg-white/10 border 
              ${age === item ? "border-purple-500" : "border-white/10"}
            `}
            onClick={() => {
              setAge(item);
              goNext();
            }}
          >
            <span className="text-white text-base">{item}</span>

            <Radio
              value={item}
              checked={age === item}
              onChange={(e) => {
                setAge(e.target.value);
                goNext();
              }}
              className="custom-radio"
            />
          </div>
        ))}

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
