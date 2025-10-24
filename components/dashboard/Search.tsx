"use client";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { statusConfigs, getStatusStyling } from "@/data/searchData";

interface SearchProps {
    selectedEstado: string;
    setSelectedEstado: (estado: string) => void;
    searchTerm: string | null;
    setSearchTerm: (searchTerm: string | null) => void;
}

export default function Search({ selectedEstado, setSelectedEstado, searchTerm, setSearchTerm }: SearchProps) {
    const { t } = useTheme();
    const [placeholder, setPlaceholder] = useState("");

    useEffect(() => {
        setPlaceholder(t("tickets.searchPlaceholder"));
    }, [t]);

    // Handle search input
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value || null);
    };

    const handleFocus = () => {
        setPlaceholder("");
    };
    const handleBlur = () => {
        if (!searchTerm || searchTerm.trim() === "") {
            setPlaceholder(t("tickets.searchPlaceholder"));
        }
    };

    return (
        <>
            <div className="w-80 h-full flex flex-col bg-[#F3F7F9] dark:bg-gray-800">
                <div className="flex w-full h-16 border-b-2 border-r-2 border-gray-200 dark:border-gray-600 justify-between items-center bg-white dark:bg-gray-900">
                    <h4 className="ml-4 text-gray-700 dark:text-gray-200 text-xl font-bold font-sans tracking-wide">{t("tickets.title")}</h4>
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

                    {/* Estados e Filtros Principais */}
                    <div className="w-full flex flex-col ">
                         <div className="mt-4 px-4">
                            <h5 className="text-[#666cff] dark:text-[#a855f7] text-[16px] font-bold font-sans tracking-wide">{t("tickets.allTickets")}</h5>
                         </div>
                         
                         <div className="mt-3 h-9 px-4 flex justify-between items-center hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200">
                            <h5 className="text-black dark:text-gray-100 text-[15px] font-sans tracking-wide">{t("tickets.ticketsToHandle")}</h5>
                            <span className="bg-[#E1E9ED] dark:bg-gray-600 text-black dark:text-gray-200 px-2 py-1 rounded-full text-sm font-semibold text-center">8</span>
                         </div>
                         
                         <div className="h-9 px-4 flex justify-between items-center hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200">
                            <h5 className="text-black dark:text-gray-100 text-[15px] font-sans tracking-wide">{t("tickets.myOpenTickets")}</h5>
                            <span className="bg-[#E1E9ED] dark:bg-gray-600 text-black dark:text-gray-200 px-2 py-1 rounded-full text-sm font-semibold text-center">3</span>
                         </div>

                         {/* My Views Section */}
                         <div className="mt-5 px-4 flex justify-between items-center">
                            <h5 className="text-[#666cff] dark:text-[#a855f7] text-[16px] font-bold font-sans tracking-wide">{t("tickets.myViews")}</h5>
                            <button className="text-[#666cff] dark:text-[#a855f7] hover:text-[#5a5fe6] dark:hover:text-[#9333ea] text-sm font-semibold transition-colors duration-200">{t("tickets.manage")}</button>
                         </div>
                         
                         <div className="mt-3 h-9 px-4 flex justify-between items-center hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200">
                            <h5 className="text-black dark:text-gray-100 text-[15px] font-sans tracking-wide">{t("tickets.myTicketsLast7Days")}</h5>
                            <span className="bg-[#E1E9ED] dark:bg-gray-600 text-black dark:text-gray-200 px-2 py-1 rounded-full text-sm font-semibold text-center">12</span>
                         </div>
                         
                         <div className="h-9 px-4 flex justify-between items-center hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200">
                            <h5 className="text-black dark:text-gray-100 text-[15px] font-sans tracking-wide">{t("tickets.openTickets")}</h5>
                            <span className="bg-[#E1E9ED] dark:bg-gray-600 text-black dark:text-gray-200 px-2 py-1 rounded-full text-sm font-semibold text-center">15</span>
                         </div>

                         {/* Statuses Section */}
                         <div className="mt-5  px-4 flex justify-between items-center">
                            <h5 className="text-[#666cff] dark:text-[#a855f7] text-[16px] font-bold font-sans tracking-wide">{t("tickets.statuses")}</h5>
                            <i className="ri-information-line text-[#666cff] dark:text-[#a855f7] text-lg hover:text-[#5a5fe6] dark:hover:text-[#9333ea] cursor-pointer transition-colors duration-200"></i>
                         </div>
                         
                         {/* Status Options */}
                         {statusConfigs.map((statusConfig, index) => {
                            const isSelected = selectedEstado === statusConfig.key;
                            const styling = getStatusStyling(statusConfig, isSelected);
                            
                            return (
                                <div 
                                    key={statusConfig.key}
                                    onClick={() => setSelectedEstado(statusConfig.key)}
                                    className={`${styling.containerClass} ${index === 0 ? 'mt-3' : ''}`}
                                >
                                    <h5 className={styling.textClass}>
                                        {t(statusConfig.translationKey)}
                                    </h5>
                                    <span className={styling.badgeClass}>
                                        {statusConfig.count}
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