"use client";
import items from "@/constants/home/faq";
import { Collapse, ConfigProvider } from "antd";

export default function FAQSection() {
  return (
    <div id="faq" className="max-w-6xl mx-auto py-10 lg:py-20">
      <div className="mb-12! text-center">
        <h1 className="section-title  ">FAQ</h1>
        <p className="section-subtitle">
          Learn How Our Smart Matching Helps You
        </p>
      </div>

      <ConfigProvider
        theme={{
          components: {
            Collapse: {
              colorText: "rgba(255, 255, 255, 0.7)",
            },
          },
        }}
      >
        <Collapse
          items={items}
          defaultActiveKey={["1"]}
          ghost
          expandIconPosition="end"
          style={{ backgroundColor: "transparent" }}
          size="large"
          className="custom-faq-collapse"
        />
      </ConfigProvider>

      <style jsx global>{`
        .custom-faq-collapse .ant-collapse-item {
          margin-bottom: 16px !important;
          background-color: transparent !important;
          border: 2px solid #a855f780 !important;
          border-radius: 8px !important;
        }

        .custom-faq-collapse .ant-collapse-header {
          padding: 16px 24px !important;
          background-color: transparent !important;
          border-radius: 8px !important;
          font-weight: 500 !important;
          color: rgba(255, 255, 255, 0.9) !important;
          font-size: 16px !important;
        }

        .custom-faq-collapse .ant-collapse-content {
          background-color: transparent !important;
          border-top: none !important;
        }

        .custom-faq-collapse .ant-collapse-content-box {
          padding: 0 24px 20px 24px !important;
        }

        .custom-faq-collapse .ant-collapse-expand-icon {
          color: rgba(255, 255, 255, 0.9) !important;
          font-size: 14px !important;
        }
      `}</style>
    </div>
  );
}
