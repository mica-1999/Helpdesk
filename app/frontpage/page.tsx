// Import component u gonna use here 
"use client";
import Sidebar from "@/components/dashboard/Bar";
import Search from "@/components/dashboard/Search";
import Pedidos from "@/components/dashboard/pedidos/Pedidos";
import Footer from "@/components/dashboard/Footer";

export default function FrontPage() {
    return (
        <>
        <div className="w-full h-screen flex">
            <Sidebar />
            <Search />
            
            {/* Main content area - right side */}
            <div className="flex-1 bg-gray-100 dark:bg-gray-800 flex flex-col">
                <div className="flex-1">
                    <Pedidos />
                </div>
                
                {/* Footer at bottom of main content area */}
                {/* <Footer /> */}
            </div>
        </div>
        </>
    );
}