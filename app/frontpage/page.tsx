// Import component u gonna use here 
"use client";
import Sidebar from "@/components/dashboard/Bar";
import Search from "@/components/dashboard/Search";
import Pedidos from "@/components/dashboard/pedidos/Pedidos";
import Footer from "@/components/dashboard/Footer";

import { useState } from "react";

export default function FrontPage() {
    const [estado, setEstado] = useState("all");
    const [searchTerm, setSearchTerm] = useState<string | null>(null);

    return (
        <>
        <div className="w-full h-screen flex">
            <Sidebar />
            <Search selectedEstado={estado} setSelectedEstado={setEstado} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            
            {/* Main content area - right side */}
            <div className="flex-1 bg-gray-100 dark:bg-gray-800 flex flex-col">
                <div className="flex-1">
                    <Pedidos selectedEstado={estado} searchTerm={searchTerm} />
                </div>
                
                {/* Footer at bottom of main content area */}
                {/* <Footer /> */}
            </div>
        </div>
        </>
    );
}