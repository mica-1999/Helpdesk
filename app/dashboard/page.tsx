// Import component u gonna use here 
"use client";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useLoading, LoadingSpinner } from "@/components/reusable/useLoading";
import Search from "@/components/dashboard/Search";
import Pedidos from "@/components/dashboard/pedidos/Pedidos";

export default function FrontPage() {
    const { t } = useTheme(); // Translations
    const isLoading = useLoading({ delay: 800 }); // Reusable loading hook to prevent weird loading behavior
    const [estado, setEstado] = useState("all"); // State for selected estado
    const [searchTerm, setSearchTerm] = useState<string | null>(null); // State for search term

    // Loading spinner com mensagem traduzida
    if (isLoading) {
        return <LoadingSpinner message={t("loading.tickets")} />;
    }

    return (
        <div className="w-full h-full flex">
            <Search selectedEstado={estado} setSelectedEstado={setEstado} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            
            {/* Conteudo Principal */}
            <div className="flex-1 bg-gray-100 dark:bg-gray-800 flex flex-col">
                <div className="flex-1">
                    <Pedidos selectedEstado={estado} searchTerm={searchTerm} />
                </div>
            </div>
        </div>
    );
}