"use client";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { equipmentStatusConfigs, equipmentTypeConfigs, getEquipmentStyling } from "@/data/equipmentSearchData";
import { SearchEquipmentProps } from "@/types/equipment";

export default function SearchEquipamento({ selectedStatus, setSelectedStatus, selectedType, setSelectedType, searchTerm, setSearchTerm }: SearchEquipmentProps) {
    const { t } = useTheme(); // Funcao de traducao do contexto de tema
    const [placeholder, setPlaceholder] = useState(""); // Placeholder do input de pesquisa

    // Create equipment arrays with labels from translations
    const equipmentStatuses = equipmentStatusConfigs.map(status => ({
        ...status,
        label: t(`equipment.${status.key}`)
    }));

    const equipmentTypes = equipmentTypeConfigs.map(type => ({
        ...type,
        label: t(`equipment.${type.key}`)
    }));

    // Muda o placeholder quando a lingua muda
    useEffect(() => {
        setPlaceholder(t("equipment.searchPlaceholder"));
    }, [t]);

    // Mete o valor da pesquisa no state    
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value || null);
    };

    // Dá reset ao placeholder ao focar
    const handleFocus = () => {
        setPlaceholder("");
    };

    // Quando desfoca, repoe o placeholder se o campo estiver vazio
    const handleBlur = () => {
        if (!searchTerm || searchTerm.trim() === "") {
            setPlaceholder(t("equipment.searchPlaceholder"));
        }
    };

    // Mudança na seleção de status
    const handleStatusSelection = (key: string) => {
        if (key === "all") {
            setSelectedStatus(["all"]);
        } else {
            setSelectedStatus(prev => {
                // Remove "all" quando selecionar outros status
                const withoutAll = prev.filter((item: string) => item !== "all");
                
                // Seleciona ou desseleciona o status
                if (withoutAll.includes(key)) {
                    const newSelection = withoutAll.filter((item: string) => item !== key);
                    return newSelection.length === 0 ? ["all"] : newSelection;
                } else {
                    return [...withoutAll, key];
                }
            });
        }
    };

    // Mudança na seleção de tipo
    const handleTypeSelection = (key: string) => {
        if (key === "all") {
            setSelectedType(["all"]);
        } else {
            setSelectedType(prev => {
                // Remove "all" when selecting other types
                const withoutAll = prev.filter((item: string) => item !== "all");
                
                // Toggle the selected type
                if (withoutAll.includes(key)) {
                    const newSelection = withoutAll.filter((item: string) => item !== key);
                    return newSelection.length === 0 ? ["all"] : newSelection;
                } else {
                    return [...withoutAll, key];
                }
            });
        }
    };

    // Check if status is selected
    const isStatusSelected = (key: string) => {
        return selectedStatus.includes(key);
    };

    // Check if type is selected
    const isTypeSelected = (key: string) => {
        return selectedType.includes(key);
    };

    return (
        <>
            <div className="w-80 h-full flex flex-col bg-[#F3F7F9] dark:bg-gray-800">
                <div className="flex w-full h-16 border-b-2 border-r-2 border-gray-200 dark:border-gray-600 justify-between items-center bg-white dark:bg-gray-900">
                    <h4 className="ml-4 text-gray-700 dark:text-gray-200 text-xl font-bold font-sans tracking-wide">{t("equipment.title")}</h4>
                    <button className="w-32 h-9 mr-4 text-white bg-[#666cff] hover:bg-[#5a5fe6] dark:bg-[#7c3aed] dark:hover:bg-[#6d28d9] rounded-md cursor-pointer transition-colors duration-200">{t("tickets.newTicket")}</button>
                </div>
                
                <div className="w-full flex-1 border-r-2 border-gray-200 dark:border-gray-600 bg-[#F3F7F9] dark:bg-gray-800">
                    <div className="w-full h-18 p-3 flex items-center border-gray-200 dark:border-gray-600">  
                        <div className="relative w-full">
                            <input 
                                type="text" 
                                placeholder={placeholder} 
                                value={searchTerm || ""}
                                onChange={handleSearchChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                className="w-full h-11 pl-10 pr-4 border border-[#666cff] dark:border-[#7c3aed] rounded-sm outline-none bg-white dark:bg-gray-700 placeholder-gray-400 dark:placeholder-gray-300 text-gray-800 dark:text-gray-100 focus:border-[#5a5fe6] dark:focus:border-[#6d28d9] focus:bg-blue-50 dark:focus:bg-gray-600 focus:text-gray-900 dark:focus:text-gray-100 transition-all duration-200" 
                            />
                            <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666cff] dark:text-[#7c3aed] text-lg"></i>
                        </div>
                    </div> 
                    <div className="w-full flex flex-col">
                         <div className="mt-4 px-4 flex justify-between items-center">
                            <h5 className="text-[#666cff] dark:text-[#a855f7] text-[16px] font-bold font-sans tracking-wide">Status</h5>
                            <i className="ri-bar-chart-box-line text-[#666cff] dark:text-[#a855f7] text-lg hover:text-[#5a5fe6] dark:hover:text-[#9333ea] cursor-pointer transition-colors duration-200"></i>
                         </div>
                         {equipmentStatuses.map((status, index) => {
                            const isSelected = isStatusSelected(status.key);
                            const styling = getEquipmentStyling(status, isSelected);
                            
                            return (
                                <div 
                                    key={status.key}
                                    onClick={() => handleStatusSelection(status.key)}
                                    className={`${styling.containerClass} ${index === 0 ? 'mt-3' : ''}`}
                                >
                                    <div className="flex items-center">
                                        <i className={`${status.icon} ${styling.iconClass}`}></i>
                                        <h5 className={styling.textClass}>
                                            {status.label}
                                        </h5>
                                    </div>
                                    <span className={styling.badgeClass}>
                                        {status.count}
                                    </span>
                                </div>
                            );
                         })}

                    </div>
                    <div className="w-full flex flex-col">
                         <div className="mt-6 px-4 flex justify-between items-center">
                            <h5 className="text-[#666cff] dark:text-[#a855f7] text-[16px] font-bold font-sans tracking-wide">Tipo</h5>
                            <i className="ri-stack-line text-[#666cff] dark:text-[#a855f7] text-lg hover:text-[#5a5fe6] dark:hover:text-[#9333ea] cursor-pointer transition-colors duration-200"></i>
                         </div>
                         
                         {equipmentTypes.map((type, index) => {
                            const isSelected = isTypeSelected(type.key);
                            const styling = getEquipmentStyling(type, isSelected);
                            
                            return (
                                <div 
                                    key={type.key}
                                    onClick={() => handleTypeSelection(type.key)}
                                    className={`${styling.containerClass} ${index === 0 ? 'mt-3' : ''}`}
                                >
                                    <div className="flex items-center">
                                        <i className={`${type.icon} ${styling.iconClass}`}></i>
                                        <h5 className={styling.textClass}>
                                            {type.label}
                                        </h5>
                                    </div>
                                    <span className={styling.badgeClass}>
                                        {type.count}
                                    </span>
                                </div>
                            );
                         })}

                    </div>
                </div>

            </div>
        </> 
    )
}