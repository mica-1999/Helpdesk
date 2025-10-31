"use client"
import { useTheme } from "@/context/ThemeContext";
import { equipmentData, Equipment } from "@/data/equipmentData";
import { EquipmentContentProps } from "@/types/equipment";
import Image from "next/image";

export default function EquipmentContent({ selectedStatus, searchTerm }: EquipmentContentProps) {
    const { t } = useTheme();  // Funcao de traducao do contexto de tema

    // Filter equipment based on status and search term using AND operation
    const filteredEquipment = equipmentData.filter((equipment: Equipment) => {
        // Status filter - if "all" is selected or equipment status is in selectedStatus
        const statusMatch = selectedStatus.includes("all") || selectedStatus.includes(equipment.status);
        
        // Search term filter - search in multiple fields with keyword AND operation
        let searchMatch = true;
        if (searchTerm && searchTerm.trim() !== "") {
            const searchKeywords = searchTerm.toLowerCase().trim().split(/\s+/); // Split by spaces
            
            // Combine all relevant fields into a single searchable text
            const searchableText = [
                equipment.name,
                equipment.assignedTo || "",
                equipment.serialNumber,
                equipment.subtype,
                equipment.type,
                equipment.tag.toString()
            ].join(' ').toLowerCase();
            
            // All keywords must be found in the searchable text (AND operation)
            searchMatch = searchKeywords.every(keyword => 
                searchableText.includes(keyword)
            );
        }
        
        // AND operation - both conditions must be true
        return statusMatch && searchMatch;
    });

    return (
        <>
            <div className="w-full h-full bg-white dark:bg-gray-900 flex flex-col">
                <div className="flex w-full h-16 bg-white dark:bg-gray-900 border-b-2 border-r-2 border-gray-200 dark:border-gray-600 items-center justify-center shrink-0">
                    <h2 className="text-gray-700 dark:text-gray-200 text-xl font-bold font-sans tracking-wide">{t("equipment.allEquipment")}</h2>
                </div>

                <div className="flex w-full h-16 bg-white dark:bg-gray-900 border-b-2 border-r-2 border-gray-200 dark:border-gray-600 items-center justify-between px-4 shrink-0">
                    <button className="w-38 text-[#666cff] dark:text-[#a855f7] bg-white dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700 px-4 py-2 rounded-md cursor-pointer transition-colors duration-200 text-sm font-semibold border border-[#666cff] dark:border-[#a855f7]">{t("pedidos.addFilter")}</button>
                </div>

                <div className="flex w-full h-9 bg-white dark:bg-gray-900 border-b-2 border-r-2 border-gray-200 dark:border-gray-600 items-center justify-between px-4 shrink-0">
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                        ({filteredEquipment.length}) {t("equipment.itemsCount")}
                    </span>
                </div>

                <div className="w-full overflow-y-auto bg-gray-100 dark:bg-gray-800 p-6" style={{ height: 'calc(100vh - 164px)' }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {filteredEquipment.map((equipment: Equipment, index: number) => (
                            <div key={equipment.id} className="bg-white dark:bg-gray-900 rounded-lg p-4 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200 border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-gray-500 cursor-pointer">
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative mb-3">
                                        <Image
                                            src={`https://api.dicebear.com/7.x/shapes/svg?seed=${equipment.tag}`}
                                            alt={equipment.name}
                                            width={64}
                                            height={64}
                                            className="rounded-lg"
                                            priority={true}
                                            unoptimized={true}
                                        />
                                        <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center ${
                                            equipment.status === 'inUse' ? 'bg-green-500' : 
                                            equipment.status === 'new' ? 'bg-blue-500' : 
                                            equipment.status === 'decommissioned' ? 'bg-red-500' : 'bg-gray-500'
                                        }`}>
                                            <i className={`text-white text-xs ${
                                                equipment.status === 'inUse' ? 'ri-check-line' : 
                                                equipment.status === 'new' ? 'ri-sparkling-line' : 
                                                equipment.status === 'decommissioned' ? 'ri-delete-bin-line' : 'ri-question-line'
                                            }`}></i>
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-gray-800 dark:text-gray-100 font-semibold text-sm mb-1">{equipment.name}</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{equipment.assignedTo || "Unassigned"}</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-300 mb-3 font-medium">{equipment.subtype}</p>
                                    
                                    <div className="w-full space-y-2">
                                        <div className="grid grid-cols-2 gap-1">
                                            <div className="text-xs text-white bg-[#666cff] dark:bg-[#7c3aed] px-2 py-1 rounded-full font-medium text-center">
                                                TAG: {equipment.tag}
                                            </div>
                                            <div className="text-xs text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full font-medium text-center">
                                                {equipment.type}
                                            </div>
                                        </div>
                                        
                                        <div className="bg-gray-100 dark:bg-gray-800 px-2 py-2 rounded text-center">
                                            <div className="text-xs text-gray-400 dark:text-gray-500 font-medium">Serial Number</div>
                                            <div className="text-xs text-gray-700 dark:text-gray-200 font-mono">{equipment.serialNumber}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>            
            </div>
        </>
    )
}