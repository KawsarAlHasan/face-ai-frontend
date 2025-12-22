"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
// This patch must be imported before any Ant Design components
import "@ant-design/v5-patch-for-react-19";

export default function AntProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AntdRegistry>{children}</AntdRegistry>;
}
