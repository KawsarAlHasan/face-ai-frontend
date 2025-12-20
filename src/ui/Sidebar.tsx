"use client";
import { ConfigProvider, Menu } from "antd";
import type { MenuProps } from "antd";
import React, { useEffect, useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { menuItems } from "@/constants/dashboard-menuItems";
import Image from "next/image";
import Cookies from "js-cookie";

interface SidebarProps {
  onCloseDrawer?: () => void;
}

const Sidebar = ({ onCloseDrawer }: SidebarProps) => {
  const path = usePathname() || "/";
  const [selectedKey, setSelectedKey] = useState<string>(path);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const items = menuItems ?? [];

  useEffect(() => {
    setSelectedKey(path);
    const parent = items.find(
      (it) =>
        Array.isArray((it as any).children) &&
        (it as any).children.some((c: any) => c.key === path)
    );
    if (parent) {
      setOpenKeys([parent.key as string]);
    } else {
      const selfParent = items.find(
        (it: any) => it.key === path && Array.isArray((it as any).children)
      );
      if (selfParent) {
        setOpenKeys([selfParent.key as string]);
      } else {
        setOpenKeys([]);
      }
    }
  }, [path, items]);

  const handleOpenChange: MenuProps["onOpenChange"] = (keys) => {
    setOpenKeys(keys as string[]);
  };

  const handleClick: MenuProps["onClick"] = ({ key }) => {
    setSelectedKey(key);
    onCloseDrawer?.();
  };

  const logout = () => {
    Cookies.remove("token");
  };

  return (
    <div className="relative h-full pt-8 ps-3 w-full">
      <div className="flex flex-col h-full">
        <Link
          href="/"
          className="pb-3 flex items-center justify-center"
          onClick={onCloseDrawer}
        >
          <Image
            src="/favicon.png"
            alt="logo"
            width={90}
            height={90}
            className=""
          />
        </Link>

        <div className="flex-1 overflow-y-auto w-full pr-2 pb-16">
          <ConfigProvider
            theme={{
              components: {
                Menu: {
                  itemSelectedBg: "#A855F7",
                  itemHoverBg: "#A855F7",
                  itemActiveBg: "#A855F7",
                  itemSelectedColor: "#F1F1F1",
                  itemBorderRadius: 10,
                  itemHeight: 47,
                },
              },
              token: { colorText: "#FFFFFF" },
            }}
          >
            <Menu
              mode="inline"
              selectedKeys={[selectedKey]}
              openKeys={openKeys}
              onOpenChange={handleOpenChange}
              onClick={handleClick}
              style={{
                borderRightColor: "transparent",
                background: "transparent",
              }}
              items={items}
            />
          </ConfigProvider>
        </div>

        <div className="py-3 ps-3 absolute bottom-0 w-full ">
          <Link
            href="/auth/login"
            onClick={logout}
            className="flex items-center gap-x-2 text-red-500 hover:text-red-600"
          >
            <IoIosLogOut size={18} />
            <span className="font-normal">Déconnexion</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
