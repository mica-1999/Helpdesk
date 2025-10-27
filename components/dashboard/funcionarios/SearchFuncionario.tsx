"use client";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { secretariasConfigs, getFuncionarioStatusStyling } from "@/data/funcionarioSearchData";
import { SearchProps } from "@/types/funcionarios";

export default function SearchFuncionario({ selectedSecretaria, setSelectedSecretaria, selectedDepartamento, setSelectedDepartamento, searchTerm, setSearchTerm }: SearchProps) {
    const { t } = useTheme();
    const [placeholder, setPlaceholder] = useState("");

    // Atualiza o placeholder com a tradução correta ao mudar o idioma quando o componente monta ou o idioma muda
    useEffect(() => {
        setPlaceholder(t("funcionarios.searchPlaceholder"));
    }, [t]);

    // Mudança no input de pesquisa
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value || null);
    };
    // Ao focar no input, limpar placeholder
    const handleFocus = () => {
        setPlaceholder("");
    };
    // Ao desfocar, repor placeholder se input vazio
    const handleBlur = () => {
        if (!searchTerm || searchTerm.trim() === "") {
            setPlaceholder(t("funcionarios.searchPlaceholder"));
        }
    };

    // Helper function to handle secretaria selection
    const handleSecretariaSelection = (key: string) => {
        if (key === "GRM") {
            setSelectedSecretaria(["GRM"]);
        } else {
            setSelectedSecretaria(prev => {
                // Remove GRM ao selecionar outra secretaria
                const withoutGRM = prev.filter((item: string) => item !== "GRM");
                
                // Toggle
                if (withoutGRM.includes(key)) {
                    const newSelection = withoutGRM.filter((item: string) => item !== key);
                    return newSelection.length === 0 ? ["GRM"] : newSelection;
                } else {
                    return [...withoutGRM, key];
                }
            });
        }
    };

    // Funcao para ajudar nas cores
    const isSecretariaSelected = (key: string) => {
        return selectedSecretaria.includes(key);
    };

    return (
        <>
            <div className="w-80 h-full flex flex-col bg-[#F3F7F9] dark:bg-gray-800">
                <div className="flex w-full h-16 border-b-2 border-r-2 border-gray-200 dark:border-gray-600 justify-between items-center bg-white dark:bg-gray-900">
                    <h4 className="ml-4 text-gray-700 dark:text-gray-200 text-xl font-bold font-sans tracking-wide">{t("funcionarios.title")}</h4>
                    <button className="w-32 h-9 mr-4 text-white bg-[#666cff] hover:bg-[#5a5fe6] dark:bg-[#7c3aed] dark:hover:bg-[#6d28d9] rounded-md cursor-pointer transition-colors duration-200">+ Add Employee</button>
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

                    {/* Departments Section - Now at top */}
                    <div className="w-full flex flex-col">
                         <div className="mt-4 px-4 flex justify-between items-center">
                            <h5 className="text-[#666cff] dark:text-[#a855f7] text-[16px] font-bold font-sans tracking-wide">Departments</h5>
                            <i className="ri-building-line text-[#666cff] dark:text-[#a855f7] text-lg hover:text-[#5a5fe6] dark:hover:text-[#9333ea] cursor-pointer transition-colors duration-200"></i>
                         </div>
                         
                         {/* Department Options */}
                         {secretariasConfigs.map((secretarias, index) => {
                            const isSelected = isSecretariaSelected(secretarias.key);
                            const styling = getFuncionarioStatusStyling(secretarias, isSelected);
                            
                            return (
                                <div 
                                    key={secretarias.key}
                                    onClick={() => handleSecretariaSelection(secretarias.key)}
                                    className={`${styling.containerClass} ${index === 0 ? 'mt-3' : ''}`}
                                >
                                    <h5 className={styling.textClass}>
                                        {secretarias.key}
                                    </h5>
                                    <span className={styling.badgeClass}>
                                        {secretarias.count}
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