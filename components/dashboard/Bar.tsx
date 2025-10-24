"use client";

import Link from "next/link";

export default function Sidebar() {
    return (
        <>  
            <div className="w-24 bg-[#3A343C] h-full flex flex-col items-center justify-between">  
                {/* Sidebar Items Top*/}
                <div className="w-full">
                    <div className="w-full h-16 bg-amber-900 flex items-center justify-center hover:bg-amber-800 transition-colors duration-200 cursor-pointer">
                        <i className="ri-dashboard-line text-white text-xl"></i>
                    </div>
                    <div className="w-full h-16 bg-blue-900 flex flex-col items-center justify-center hover:bg-blue-800 transition-colors duration-200 cursor-pointer">
                        <i className="ri-ticket-line text-white text-xl"></i>
                        <span className="text-white text-sm">Tickets</span>
                    </div>
                    <div className="w-full h-16 bg-green-900 flex flex-col items-center justify-center hover:bg-green-800 transition-colors duration-200 cursor-pointer">
                        <i className="ri-user-settings-line text-white text-xl"></i>    
                    </div>
                    <div className="w-full h-16 bg-red-900 flex items-center justify-center hover:bg-red-800 transition-colors duration-200 cursor-pointer">
                        <i className="ri-computer-line text-white text-xl"></i>
                    </div> 
                </div>

                {/* Sidebar Items Bottom*/}
                <div className="w-full flex flex-col">
                    <div className="w-full h-14 bg-purple-600 flex flex-col items-center justify-center hover:bg-purple-500 transition-colors duration-200 cursor-pointer ">
                        <i className="ri-notification-line text-white text-lg"></i>
                    </div>
                    <div className="w-full h-14 bg-indigo-600 flex flex-col items-center justify-center hover:bg-indigo-500 transition-colors duration-200 cursor-pointer">
                        <i className="ri-settings-3-line text-white text-lg"></i>
                        <span className="text-white text-sm">Settings</span>
                    </div>
                    <Link href="/" className="w-full h-14 bg-teal-600 flex items-center justify-center hover:bg-teal-500 transition-colors duration-200 cursor-pointer">
                        <i className="ri-logout-box-line text-white text-lg"></i>
                    </Link>
                </div>
            </div>
        </>
    )
}