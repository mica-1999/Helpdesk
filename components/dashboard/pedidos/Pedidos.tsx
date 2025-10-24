"use client"
import { useState } from "react"
import Image from "next/image";
import { ticketsData, getStatusStyling } from "@/data/ticketsData";
import { useTheme } from "@/context/ThemeContext";


export default function Pedidos() {
    const { t } = useTheme();
    const [pagina, setPagina] = useState(1);
    const itemsPerPage = 7;
    const startIndex = (pagina - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentTickets = ticketsData.slice(startIndex, endIndex);
    const totalPages = Math.ceil(ticketsData.length / itemsPerPage);

    return (
        <>
            <div className="w-full h-full bg-white">
                <div className="flex w-full h-16 bg-white border-b-2 border-r-2 border-gray-200 items-center justify-center">
                    <h2 className="text-gray-700 dark:text-gray-500 text-xl font-bold font-sans tracking-wide">{t("pedidos.allTickets")}</h2>
                </div>

                <div className="flex w-full h-16 bg-white border-b-2 border-r-2 border-gray-200 items-center justify-between px-4">
                    <button className="w-32 text-[#666cff] bg-white hover:bg-blue-100 px-4 py-2 rounded-md cursor-pointer transition-colors duration-200 text-sm font-semibold border border-[#666cff]">{t("pedidos.addFilter")}</button>
                </div>

                <div className="flex w-full h-9 bg-white border-b-2 border-r-2 border-gray-200 items-center justify-between px-4">
                    <span className="text-gray-600 text-sm">({ticketsData.length}) {t("pedidos.ticketsCount")}</span>
                    
                    <div className="flex items-center space-x-1">
                        <button 
                            onClick={() => setPagina(Math.max(1, pagina - 1))}
                            className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors duration-200"
                        >
                            <i className="ri-arrow-left-s-line text-sm"></i>
                        </button>
                        
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                            <button
                                key={pageNum}
                                onClick={() => setPagina(pageNum)}
                                className={`w-6 h-6 flex items-center justify-center rounded transition-colors duration-200 text-xs ${
                                    pagina === pageNum
                                        ? 'text-white bg-[#666cff] hover:bg-[#5a5fe6] font-semibold'
                                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                                }`}
                            >
                                {pageNum}
                            </button>
                        ))}
                        
                        <button 
                            onClick={() => setPagina(Math.min(totalPages, pagina + 1))}
                            className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors duration-200"
                        >
                            <i className="ri-arrow-right-s-line text-sm"></i>
                        </button>
                    </div>
                </div>
                <div className="flex w-full h-12 bg-gray-50 border-b border-gray-200 items-center px-4 gap-8">
                    <div className="flex-2 text-left">
                        <span className="text-gray-700 text-sm font-semibold">{t("pedidos.tableHeaders.requester")}</span>
                    </div>
                    <div className="flex-2 text-left">
                        <span className="text-gray-700 text-sm font-semibold">{t("pedidos.tableHeaders.subject")}</span>
                    </div>
                    <div className="flex-1 text-left">
                        <span className="text-gray-700 text-sm font-semibold">{t("pedidos.tableHeaders.workLocation")}</span>
                    </div>
                    <div className="w-32 text-center">
                        <span className="text-gray-700 text-sm font-semibold">{t("pedidos.tableHeaders.status")}</span>
                    </div>
                    <div className="flex-1 text-left">
                        <span className="text-gray-700 text-sm font-semibold">{t("pedidos.tableHeaders.lastUpdated")}</span>
                    </div>
                    <div className="w-12 text-center">
                        <span className="text-gray-700 text-sm font-semibold"></span>
                    </div>
                </div>
                <div className="flex-1 w-full overflow-y-auto">
                    {currentTickets.map((ticket, index) => (
                        <div 
                            key={ticket.id} 
                            className={`flex w-full h-17 border-b border-gray-100 items-center px-4 gap-8 hover:bg-blue-50 transition-colors duration-200 cursor-pointer ${
                                index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                            }`}
                        >
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
                                    <span className="text-gray-800 text-sm font-medium">{ticket.requester.name}</span>
                                    <span className="text-gray-500 text-xs">{ticket.requester.email}</span>
                                </div>
                            </div>
                            <div className="flex-2 text-left">
                                <span className="text-gray-800 text-sm">{ticket.subject}</span>
                            </div>
                            <div className="flex-1 text-left">
                                <span className="text-gray-600 text-sm">{ticket.workLocation}</span>
                            </div>
                            <div className="w-32 text-center">
                                <span className={`${getStatusStyling(ticket.status.color)} px-2 py-1 rounded-full text-xs font-semibold`}>
                                    {ticket.status.name}
                                </span>
                            </div>
                            <div className="flex-1 text-left">
                                <span className="text-gray-600 text-sm">{ticket.lastMessage}</span>
                            </div>
                            <div className="w-12 flex justify-center">
                                <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition-colors duration-200 rounded-full cursor-pointer">
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