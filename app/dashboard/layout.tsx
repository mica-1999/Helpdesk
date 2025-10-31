"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import { useTheme } from "@/context/ThemeContext";

export default function FrontpageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { sidebarStyle } = useTheme();

    // Conditional layout based on sidebar style
    const layoutClasses = sidebarStyle === "top" 
        ? "w-full h-screen flex flex-col"  // Top: sidebar above, children below
        : "w-full h-screen flex";          // Side: sidebar left, children right

    return (
        <div className={layoutClasses}>
            <Sidebar sidebarStyle={sidebarStyle} />
            {children}
        </div>
    );
}