"use client";
import React from "react";
import Link from "next/link";
import { useMyProfile } from "@/api-services/userServices";
import { FaRegUserCircle } from "react-icons/fa";
import { BASE_URL } from "@/api-services/api";
import { Avatar, Image } from "antd";

const UserDashboardHeader = () => {
  const { profileData, isLoading, isError, mutate } = useMyProfile();

  return (
    <div className="flex items-center gap-x-7 justify-end">
      <Link href="/settings" className="flex  items-center gap-x-3">
        {profileData?.profile_picture ? (
          <Image
            className="rounded-full"
            src={BASE_URL + profileData?.profile_picture}
            style={{ objectFit: "cover" }}
            width={48}
            height={48}
            alt="profile"
            preview={false}
          />
        ) : (
          <FaRegUserCircle
            style={{
              clipPath: "circle()",
              width: 48,
              height: 48,
            }}
          />
        )}

        <div className="hidden lg:flex flex-col gap-y-0.5 ">
          <p className="text-[16px] font-medium">{profileData?.full_name}</p>
          <p className="text-[14px] font-medium">{profileData?.email}</p>
        </div>
      </Link>
    </div>
  );
};

export default UserDashboardHeader;
