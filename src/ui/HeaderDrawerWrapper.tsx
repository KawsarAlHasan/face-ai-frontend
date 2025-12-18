"use client";
import { useState } from "react";
import { Drawer } from "antd";
import { HiMenuAlt3 } from "react-icons/hi";
import Sidebar from "./Sidebar";

export default function HeaderDrawerWrapper() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden text-gray-300 text-3xl mr-3"
        onClick={() => setOpen(true)}
      >
        <HiMenuAlt3 />
      </button>

      <Drawer
        placement="left"
        open={open}
        closable={false}
        onClose={() => setOpen(false)}
        width={260}
        styles={{
          body: {
            padding: 0,
            background: "#1C1C1E",
          },
        }}
      >
        <Sidebar onCloseDrawer={() => setOpen(false)} />
      </Drawer>
    </>
  );
}
