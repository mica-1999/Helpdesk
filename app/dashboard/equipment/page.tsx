"use client"
import { useState } from "react";
import SearchEquipamento from "@/components/dashboard/equipamentos/SearchEquipamento";
import EquipmentContent from "@/components/dashboard/equipamentos/EquipmentContent";

export default function EquipmentPage() {
    const [selectedStatus, setSelectedStatus] = useState<string[]>(["all"]);
    const [selectedType, setSelectedType] = useState<string[]>(["all"]);
    const [searchTerm, setSearchTerm] = useState<string | null>(null);

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
                    <EquipmentContent />
                </div>
            </div>
        </>
    )
}