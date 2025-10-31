"use client"
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useLoading, LoadingSpinner } from "@/components/reusable/useLoading";
import SearchEquipamento from "@/components/dashboard/equipamentos/SearchEquipamento";
import EquipmentContent from "@/components/dashboard/equipamentos/EquipmentContent";

export default function EquipmentPage() {
    const { t } = useTheme();
    // Use the reusable loading hook to prevent weird loading behavior
    const isLoading = useLoading({ delay: 800 });
    
    // States para múltipla seleção status/type e pesquisa
    const [selectedStatus, setSelectedStatus] = useState<string[]>(["all"]);
    const [selectedType, setSelectedType] = useState<string[]>(["all"]);
    const [searchTerm, setSearchTerm] = useState<string | null>(null);

    // Loading spinner com mensagem traduzida
    if (isLoading) {
        return <LoadingSpinner message={t("loading.equipment")} />;
    }

    return (
        <>
            <SearchEquipamento 
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            {/* Main content area - right side */}
            <div className="flex-1 bg-gray-100 dark:bg-gray-800 flex flex-col">
                <div className="flex-1">
                    <EquipmentContent 
                        selectedStatus={selectedStatus}
                        searchTerm={searchTerm}
                    />
                </div>
            </div>
        </>
    )
}