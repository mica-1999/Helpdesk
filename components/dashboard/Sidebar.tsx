"use client";

import Link from "next/link";

export default function Sidebar() {
    return (
        <>  
            <div className="w-24 bg-[#F3F7F9] dark:bg-[#1E2939] h-full flex flex-col items-center justify-between">  
                {/* Sidebar Items Top*/}
                <div className="w-full">
                    <div className="w-full h-16 bg-[#666cff] dark:bg-[#7c3aed] flex items-center justify-center hover:bg-[#5a5fe6] dark:hover:bg-[#6d28d9] transition-colors duration-200 cursor-pointer">
                        <i className="ri-dashboard-line text-white text-xl"></i>
                    </div>
                    <Link href="/dashboard" className="w-full h-16 bg-[#666cff] dark:bg-[#7c3aed] flex flex-col items-center justify-center hover:bg-[#5a5fe6] dark:hover:bg-[#6d28d9] transition-colors duration-200 cursor-pointer">
                        <i className="ri-ticket-line text-white text-xl"></i>
                    </Link>

                    <Link href="/dashboard/users" className="w-full h-16 bg-[#666cff] dark:bg-[#7c3aed] flex flex-col items-center justify-center hover:bg-[#5a5fe6] dark:hover:bg-[#6d28d9] transition-colors duration-200 cursor-pointer">
                        <i className="ri-user-settings-line text-white text-xl"></i>    
                    </Link>
                    <Link href="/dashboard/equipment" className="w-full h-16 bg-[#666cff] dark:bg-[#7c3aed] flex items-center justify-center hover:bg-[#5a5fe6] dark:hover:bg-[#6d28d9] transition-colors duration-200 cursor-pointer">
                        <i className="ri-computer-line text-white text-xl"></i>
                    </Link> 
                </div>

                {/* Sidebar Items Bottom*/}
                <div className="w-full flex flex-col">
                    <div className="w-full h-14 bg-[#666cff] dark:bg-[#7c3aed] flex flex-col items-center justify-center hover:bg-[#5a5fe6] dark:hover:bg-[#6d28d9] transition-colors duration-200 cursor-pointer ">
                        <i className="ri-notification-line text-white text-lg"></i>
                    </div>
                    <div className="w-full h-14 bg-[#666cff] dark:bg-[#7c3aed] flex flex-col items-center justify-center hover:bg-[#5a5fe6] dark:hover:bg-[#6d28d9] transition-colors duration-200 cursor-pointer">
                        <i className="ri-settings-3-line text-white text-lg"></i>
                    </div>
                    <Link href="/" className="w-full h-14 bg-[#666cff] dark:bg-[#7c3aed] flex items-center justify-center hover:bg-[#5a5fe6] dark:hover:bg-[#6d28d9] transition-colors duration-200 cursor-pointer">
                        <i className="ri-logout-box-line text-white text-lg"></i>
                    </Link>
                </div>
            </div>
        </>
    )
}