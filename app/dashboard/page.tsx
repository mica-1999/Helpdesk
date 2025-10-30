// Import component u gonna use here 
"use client";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useLoading, LoadingSpinner } from "@/components/reusable/useLoading";
import Search from "@/components/dashboard/Search";
import Pedidos from "@/components/dashboard/pedidos/Pedidos";
import Footer from "@/components/dashboard/Footer";

export default function FrontPage() {
    const { t } = useTheme();
    // Use the reusable loading hook to prevent weird loading behavior
    const isLoading = useLoading({ delay: 800 });
    
    const [estado, setEstado] = useState("all");
    const [searchTerm, setSearchTerm] = useState<string | null>(null);

    if (isLoading) {
        return <LoadingSpinner message={t("loading.tickets")} />;
    }

    return (
        <>
            <Search selectedEstado={estado} setSelectedEstado={setEstado} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            
            {/* Main content area - right side */}
            <div className="flex-1 bg-gray-100 dark:bg-gray-800 flex flex-col">
                <div className="flex-1">
                    <Pedidos selectedEstado={estado} searchTerm={searchTerm} />
                </div>
                
                {/* Footer at bottom of main content area */}
                {/* <Footer /> */}
            </div>
        </>
    );
}