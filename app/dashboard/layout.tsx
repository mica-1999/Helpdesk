"use client";
import Sidebar from "@/components/dashboard/Sidebar";

export default function FrontpageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full h-screen flex">
            <Sidebar />
            {children}
        </div>
    );
}