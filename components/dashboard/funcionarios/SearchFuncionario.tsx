"use client";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { secretariasConfigs, getFuncionarioStatusStyling } from "@/data/funcionarioSearchData";
import { SearchProps } from "@/types/funcionarios";

export default function SearchFuncionario({ selectedSecretaria, setSelectedSecretaria, selectedDepartamento, setSelectedDepartamento, searchTerm, setSearchTerm }: SearchProps) {
    const { t } = useTheme();
    const [placeholder, setPlaceholder] = useState("");
    const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

    // Atualiza o placeholder com a tradução correta ao mudar o idioma quando o componente monta ou o idioma muda
    useEffect(() => {
        setPlaceholder(t("funcionarios.searchPlaceholder"));
    }, [t]);

    // Clean up departments when their parent secretaria is deselected
    useEffect(() => {
        if (selectedSecretaria.includes("GRM")) {
            // If GRM is selected, clear all departments
            setSelectedDepartamento([]);
            return;
        }

        // Remove departments that belong to deselected secretarias
        setSelectedDepartamento(prev => {
            const validDepartments = prev.filter(department => {
                // Find which secretaria this department belongs to
                const parentSecretaria = secretariasConfigs.find(secretaria => 
                    secretaria.departments && secretaria.departments.includes(department)
                );
                
                // Keep the department only if its parent secretaria is still selected
                return parentSecretaria && selectedSecretaria.includes(parentSecretaria.key);
            });
            
            return validDepartments;
        });
    }, [selectedSecretaria]);

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

    // Mudança na seleção de secretaria
    const handleSecretariaSelection = (key: string) => {
        if (key === "GRM") {
            setSelectedSecretaria(["GRM"]);
            // Reset departments and close all dropdowns when GRM is selected
            setSelectedDepartamento([]);
            setOpenDropdowns([]);
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
            
            // Also toggle dropdown when secretaria is clicked (only for non-GRM)
            const secretaria = secretariasConfigs.find(s => s.key === key);
            if (secretaria && secretaria.departments && secretaria.departments.length > 0) {
                setOpenDropdowns(prev => {
                    if (prev.includes(key)) {
                        return prev.filter(item => item !== key);
                    } else {
                        return [...prev, key];
                    }
                });
            }
        }
    };

    // Funcao para abrir/fechar dropdowns
    const toggleDropdown = (key: string, e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent secretaria selection when clicking dropdown toggle
        setOpenDropdowns(prev => {
            if (prev.includes(key)) {
                return prev.filter(item => item !== key);
            } else {
                return [...prev, key];
            }
        });
    };

    // Funcao para selecionar departamentos
    const handleDepartmentSelection = (department: string) => {
        setSelectedDepartamento(prev => {
            if (prev.includes(department)) {
                return prev.filter(dep => dep !== department);
            } else {
                return [...prev, department];
            }
        });
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
                    <button className="w-32 h-9 mr-4 text-white bg-[#666cff] hover:bg-[#5a5fe6] dark:bg-[#7c3aed] dark:hover:bg-[#6d28d9] rounded-md cursor-pointer transition-colors duration-200">{t("funcionarios.addEmployee")}</button>
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

                    {/* Secretarias Section */}
                    <div className="w-full flex flex-col">
                         <div className="mt-4 px-4 flex justify-between items-center">
                            <h5 className="text-[#666cff] dark:text-[#a855f7] text-[16px] font-bold font-sans tracking-wide">Secretarias</h5>
                            <i className="ri-government-line text-[#666cff] dark:text-[#a855f7] text-lg hover:text-[#5a5fe6] dark:hover:text-[#9333ea] cursor-pointer transition-colors duration-200"></i>
                         </div>
                         
                         {/* Secretarias with Dropdown Options */}
                         {secretariasConfigs.map((secretarias, index) => {
                            const isSelected = isSecretariaSelected(secretarias.key);
                            const isDropdownOpen = openDropdowns.includes(secretarias.key);
                            const styling = getFuncionarioStatusStyling(secretarias, isSelected);
                            const hasDepartments = secretarias.departments && secretarias.departments.length > 0;
                            
                            return (
                                <div key={secretarias.key} className={`${index === 0 ? 'mt-3' : ''}`}>
                                    {/* Secretaria Header */}
                                    <div 
                                        onClick={() => handleSecretariaSelection(secretarias.key)}
                                        className={`${styling.containerClass} relative`}
                                    >
                                        <h5 className={styling.textClass}>
                                            {secretarias.key}
                                        </h5>
                                        <div className="flex items-center gap-2">
                                            <span className={styling.badgeClass}>
                                                {secretarias.count}
                                            </span>
                                            {hasDepartments && (
                                                <button
                                                    onClick={(e) => toggleDropdown(secretarias.key, e)}
                                                    className="ml-1 text-sm transition-transform duration-200"
                                                >
                                                    <i className={`ri-arrow-down-s-line transform ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Department Dropdown */}
                                    {hasDepartments && isDropdownOpen && (
                                        <div className="bg-gray-50 dark:bg-gray-700 border-l-4 border-[#666cff] dark:border-[#7c3aed]">
                                            {secretarias.departments.map((department) => {
                                                const isDepartmentSelected = selectedDepartamento.includes(department);
                                                return (
                                                    <div 
                                                        key={department}
                                                        onClick={() => handleDepartmentSelection(department)}
                                                        className={`h-8 px-6 flex justify-between items-center cursor-pointer transition-colors duration-200 ${
                                                            isDepartmentSelected 
                                                                ? 'bg-[#666cff] dark:bg-[#7c3aed] text-white' 
                                                                : 'hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200'
                                                        }`}
                                                    >
                                                        <span className="text-[13px] font-sans">
                                                            {department}
                                                        </span>
                                                        {isDepartmentSelected && (
                                                            <i className="ri-check-line text-xs"></i>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                         })}

                    </div>
                </div>

            </div>
        </> 
    )
}