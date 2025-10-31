/**
 * Sidebar Component
 * 
 * Comes with 2 styles: "top" and "side", controlled via props from parent component.
 * Menu for navigation within the dashboard.
 * 
 */

"use client";
import Link from "next/link";
import { SidebarProps } from "@/types/theme";

export default function Sidebar({ sidebarStyle }: SidebarProps) {
    // Conditional classes based on sidebar style
    const sidebarClasses = sidebarStyle === "top" 
        ? "w-full h-20 bg-gray-900 dark:bg-gray-950 flex items-center justify-between px-4"
        : "w-24 bg-gray-900 dark:bg-gray-950 h-full flex flex-col items-center justify-between";

    const itemsContainerClasses = sidebarStyle === "top"
        ? "flex items-center gap-2"
        : "w-full";

    const bottomItemsClasses = sidebarStyle === "top"
        ? "flex items-center gap-2"
        : "w-full flex flex-col";

    const itemClasses = sidebarStyle === "top"
        ? "w-12 h-12 bg-[#666cff] dark:bg-[#7c3aed] flex items-center justify-center hover:bg-[#5a5fe6] dark:hover:bg-[#6d28d9] transition-colors duration-200 cursor-pointer rounded-lg"
        : "w-full h-16 bg-[#666cff] dark:bg-[#7c3aed] flex items-center justify-center hover:bg-[#5a5fe6] dark:hover:bg-[#6d28d9] transition-colors duration-200 cursor-pointer";

    const bottomItemClasses = sidebarStyle === "top"
        ? "w-10 h-10 bg-[#666cff] dark:bg-[#7c3aed] flex items-center justify-center hover:bg-[#5a5fe6] dark:hover:bg-[#6d28d9] transition-colors duration-200 cursor-pointer rounded-lg"
        : "w-full h-14 bg-[#666cff] dark:bg-[#7c3aed] flex items-center justify-center hover:bg-[#5a5fe6] dark:hover:bg-[#6d28d9] transition-colors duration-200 cursor-pointer";

    return (
        <>  
            <div className={sidebarClasses}>  
                {/* Sidebar Items Top*/}
                <div className={itemsContainerClasses}>
                    <div className={itemClasses}>
                        <i className="ri-dashboard-line text-white text-xl"></i>
                    </div>
                    <Link href="/dashboard" className={itemClasses}>
                        <i className="ri-ticket-line text-white text-xl"></i>
                    </Link>

                    <Link href="/dashboard/users" className={itemClasses}>
                        <i className="ri-user-settings-line text-white text-xl"></i>    
                    </Link>
                    <Link href="/dashboard/equipment" className={itemClasses}>
                        <i className="ri-computer-line text-white text-xl"></i>
                    </Link> 
                </div>

                {/* Sidebar Items Bottom*/}
                <div className={bottomItemsClasses}>
                    <div className={bottomItemClasses}>
                        <i className="ri-notification-line text-white text-lg"></i>
                    </div>
                    <div className={bottomItemClasses}>
                        <i className="ri-settings-3-line text-white text-lg"></i>
                    </div>
                    <Link href="/" className={bottomItemClasses}>
                        <i className="ri-logout-box-line text-white text-lg"></i>
                    </Link>
                </div>
            </div>
        </>
    )
}