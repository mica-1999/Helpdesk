"use client"
import { useState, useMemo, useEffect } from "react"
import Image from "next/image";
import { ticketsData, getStatusStyling } from "@/data/ticketsData";
import { useTheme } from "@/context/ThemeContext";
import { PedidosProps } from "@/types/pedidos";

export default function Pedidos({ selectedEstado, searchTerm }: PedidosProps) {
    const { t } = useTheme();
    const [pagina, setPagina] = useState(1);
    const itemsPerPage = 7;
    
    // Filter tickets based on selected status and patID
    const filteredTickets = useMemo(() => {
        let filtered = ticketsData;
        
        // Filter by status
        if (selectedEstado !== "all") {
            filtered = filtered.filter(ticket => ticket.status.name === selectedEstado);
        }
        
        // Filter by search term across all fields if provided
        if (searchTerm && searchTerm.trim() !== "") {
            const searchKeywords = searchTerm.toLowerCase().trim().split(/\s+/); // Split by spaces and remove empty strings
            
            filtered = filtered.filter(ticket => {
                // Create a combined searchable text for each ticket
                const searchableText = [
                    ticket.ticketId,
                    ticket.subject,
                    ticket.requester.name,
                    ticket.requester.email,
                    ticket.workLocation,
                    ticket.status.name,
                    ticket.lastMessage
                ].join(' ').toLowerCase();
                
                // All keywords must be found in the searchable text
                return searchKeywords.every(keyword => 
                    searchableText.includes(keyword)
                );
            });
        }
        
        return filtered;
    }, [selectedEstado, searchTerm]);
    
    const startIndex = (pagina - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentTickets = filteredTickets.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredTickets.length / itemsPerPage);

    // Reset to page 1 when filter changes
    useEffect(() => {
        setPagina(1);
    }, [selectedEstado, searchTerm]);

    return (
        <>
            <div className="w-full h-full bg-white dark:bg-gray-900">
                <div className="flex w-full h-16 bg-white dark:bg-gray-900 border-b-2 border-r-2 border-gray-200 dark:border-gray-600 items-center justify-center">
                    <h2 className="text-gray-700 dark:text-gray-200 text-xl font-bold font-sans tracking-wide">{t("pedidos.allTickets")}</h2>
                </div>

                <div className="flex w-full h-16 bg-white dark:bg-gray-900 border-b-2 border-r-2 border-gray-200 dark:border-gray-600 items-center justify-between px-4">
                    <button className="w-38 text-[#666cff] dark:text-[#a855f7] bg-white dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700 px-4 py-2 rounded-md cursor-pointer transition-colors duration-200 text-sm font-semibold border border-[#666cff] dark:border-[#a855f7]">{t("pedidos.addFilter")}</button>
                </div>

                <div className="flex w-full h-9 bg-white dark:bg-gray-900 border-b-2 border-r-2 border-gray-200 dark:border-gray-600 items-center justify-between px-4">
                    <span className="text-gray-600 dark:text-gray-300 text-sm">({filteredTickets.length}) {t("pedidos.ticketsCount")}</span>
                    
                    <div className="flex items-center space-x-1">
                        <button 
                            onClick={() => setPagina(Math.max(1, pagina - 1))}
                            className="w-6 h-6 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors duration-200"
                        >
                            <i className="ri-arrow-left-s-line text-sm"></i>
                        </button>
                        
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                            <button
                                key={pageNum}
                                onClick={() => setPagina(pageNum)}
                                className={`w-6 h-6 flex items-center justify-center rounded transition-colors duration-200 text-xs ${
                                    pagina === pageNum
                                        ? 'text-white bg-[#666cff] dark:bg-[#7c3aed] hover:bg-[#5a5fe6] dark:hover:bg-[#6d28d9] font-semibold'
                                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}
                            >
                                {pageNum}
                            </button>
                        ))}
                        
                        <button 
                            onClick={() => setPagina(Math.min(totalPages, pagina + 1))}
                            className="w-6 h-6 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors duration-200"
                        >
                            <i className="ri-arrow-right-s-line text-sm"></i>
                        </button>
                    </div>
                </div>
                <div className="flex w-full h-12 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-600 items-center px-4 gap-8">
                    <div className="w-16 text-left">
                        <span className="text-gray-700 dark:text-gray-200 text-sm font-semibold">PAT</span>
                    </div>
                    <div className="flex-2 text-left">
                        <span className="text-gray-700 dark:text-gray-200 text-sm font-semibold">{t("pedidos.tableHeaders.requester")}</span>
                    </div>
                    <div className="flex-2 text-left">
                        <span className="text-gray-700 dark:text-gray-200 text-sm font-semibold">{t("pedidos.tableHeaders.subject")}</span>
                    </div>
                    <div className="flex-1 text-left">
                        <span className="text-gray-700 dark:text-gray-200 text-sm font-semibold">{t("pedidos.tableHeaders.workLocation")}</span>
                    </div>
                    <div className="w-32 text-center">
                        <span className="text-gray-700 dark:text-gray-200 text-sm font-semibold">{t("pedidos.tableHeaders.status")}</span>
                    </div>
                    <div className="flex-1 text-left">
                        <span className="text-gray-700 dark:text-gray-200 text-sm font-semibold">{t("pedidos.tableHeaders.lastUpdated")}</span>
                    </div>
                    <div className="w-12 text-center">
                        <span className="text-gray-700 dark:text-gray-200 text-sm font-semibold"></span>
                    </div>
                </div>
                <div className="flex-1 w-full overflow-y-auto bg-white dark:bg-gray-900">
                    {currentTickets.map((ticket, index) => (
                        <div 
                            key={ticket.id} 
                            className={`flex w-full h-17 border-b border-gray-100 dark:border-gray-700 items-center px-4 gap-8 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200${
                                index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-slate-50 dark:bg-gray-800'
                            }`}
                        >
                            <div className="w-16 text-left">
                                <span className="text-gray-600 dark:text-gray-400 text-sm font-mono">#{ticket.ticketId}</span>
                            </div>
                            <div className="flex-2 flex items-center">
                                <Image
                                    src={ticket.requester.avatar}
                                    alt="User Avatar"
                                    width={40}
                                    height={40}
                                    className="rounded-full mr-3"
                                    priority={true}
                                    unoptimized={true}
                                />
                                <div className="flex flex-col">
                                    <span className="text-gray-800 dark:text-gray-100 text-sm font-medium">{ticket.requester.name}</span>
                                    <span className="text-gray-500 dark:text-gray-400 text-xs">{ticket.requester.email}</span>
                                </div>
                            </div>
                            <div className="flex-2 text-left">
                                <span className="text-gray-800 dark:text-gray-100 text-sm">{ticket.subject}</span>
                            </div>
                            <div className="flex-1 text-left">
                                <span className="text-gray-600 dark:text-gray-300 text-sm">{ticket.workLocation}</span>
                            </div>
                            <div className="w-32 text-center">
                                <span className={`${getStatusStyling(ticket.status.color)} px-2 py-1 rounded-full text-xs font-semibold`}>
                                    {ticket.status.name}
                                </span>
                            </div>
                            <div className="flex-1 text-left">
                                <span className="text-gray-600 dark:text-gray-300 text-sm">{ticket.lastMessage}</span>
                            </div>
                            <div className="w-12 flex justify-center">
                                <button className="w-8 h-8 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 rounded-full cursor-pointer">
                                    <i className="ri-more-fill text-lg"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}