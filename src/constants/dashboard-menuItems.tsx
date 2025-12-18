"use client";
import Link from 'next/link';
import type { MenuProps } from 'antd';
import { FcAddImage, FcBullish, FcCurrencyExchange, FcHome, FcSettings } from "react-icons/fc";

const  menuItems: MenuProps['items'] = [
        {
            key: '/dashboard',
            icon: <FcHome size={18} />,
            label: <Link href="/dashboard">Dashboard</Link>,
        },
        {
            key: '/new-scan',
            icon: <FcAddImage size={18} />,
            label: <Link href="/new-scan">New Scan </Link>,
        },
        {
            key: '/progress',
            icon: <FcBullish size={18} />,
            label: <Link href="/progress">Progress</Link>,
        },
        {
            key: '/subscription',
            icon: <FcCurrencyExchange size={18} />,
            label: <Link href="/subscription">Subscription</Link>,
        },
        {
            key: '/settings',
            icon: <FcSettings size={18} />,
            label: <Link href="/settings">Settings</Link>,
        }
]

export { menuItems };