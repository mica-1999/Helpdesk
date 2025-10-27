"use client"
import { useMemo } from "react"
import Image from "next/image";
import { funcionariosData, Funcionario } from "@/data/funcionariosData";
import { useTheme } from "@/context/ThemeContext";

interface FuncionariosProps {
    selectedEstado: string;
    searchTerm: string | null;
}

export default function FuncionariosContent({ selectedEstado, searchTerm }: FuncionariosProps) {
    const { t } = useTheme();
    
    // Filter employees based on department/secretaria and search term
    const filteredFuncionarios = useMemo(() => {
        let filtered = funcionariosData;
        
        // Filter by department, secretaria, or status
        if (selectedEstado !== "all") {
            filtered = filtered.filter(funcionario => 
                funcionario.department === selectedEstado || 
                funcionario.secretaria === selectedEstado ||
                funcionario.status === selectedEstado
            );
        }
        
        // Filter by search term across all employee fields
        if (searchTerm && searchTerm.trim() !== "") {
            const searchQuery = searchTerm.toLowerCase();
            filtered = filtered.filter(funcionario => 
                // Search in employee name
                funcionario.name.toLowerCase().includes(searchQuery) ||
                // Search in employee email
                funcionario.email.toLowerCase().includes(searchQuery) ||
                // Search in department
                funcionario.department.toLowerCase().includes(searchQuery) ||
                // Search in secretaria
                funcionario.secretaria.toLowerCase().includes(searchQuery) ||
                // Search in position
                funcionario.position.toLowerCase().includes(searchQuery) ||
                // Search in NIF
                funcionario.nif.includes(searchQuery) ||
                // Search in numero mecanografico
                funcionario.numeroMecanografico.includes(searchQuery)
            );
        }
        
        return filtered;
    }, [selectedEstado, searchTerm]);

    return (
        <>
            <div className="w-full h-full bg-white dark:bg-gray-900 flex flex-col">
                <div className="flex w-full h-16 bg-white dark:bg-gray-900 border-b-2 border-r-2 border-gray-200 dark:border-gray-600 items-center justify-center shrink-0">
                    <h2 className="text-gray-700 dark:text-gray-200 text-xl font-bold font-sans tracking-wide">{t("funcionarios.allEmployees")}</h2>
                </div>

                <div className="flex w-full h-16 bg-white dark:bg-gray-900 border-b-2 border-r-2 border-gray-200 dark:border-gray-600 items-center justify-between px-4 shrink-0">
                    <button className="w-38 text-[#666cff] dark:text-[#a855f7] bg-white dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700 px-4 py-2 rounded-md cursor-pointer transition-colors duration-200 text-sm font-semibold border border-[#666cff] dark:border-[#a855f7]">{t("pedidos.addFilter")}</button>
                </div>

                <div className="flex w-full h-9 bg-white dark:bg-gray-900 border-b-2 border-r-2 border-gray-200 dark:border-gray-600 items-center justify-between px-4 shrink-0">
                    <span className="text-gray-600 dark:text-gray-300 text-sm">({filteredFuncionarios.length}) all employees</span>
                </div>
                
                {/* Employee cards grid with scrollbar - calculated height: 100vh - 64px - 64px - 36px = calc(100vh - 164px) */}
                <div className="w-full overflow-y-auto bg-gray-100 dark:bg-gray-800 p-6" style={{ height: 'calc(100vh - 164px)' }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {filteredFuncionarios.map((funcionario: Funcionario, index: number) => (
                            <div key={funcionario.id} className="bg-white dark:bg-gray-900 rounded-lg p-4 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200 border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-gray-500 cursor-pointer">
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative mb-3">
                                        <Image
                                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${funcionario.name}`}
                                            alt={funcionario.name}
                                            width={64}
                                            height={64}
                                            className="rounded-full"
                                            priority={true}
                                            unoptimized={true}
                                        />
                                        <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center ${
                                            funcionario.status === 'active' ? 'bg-green-500' : 
                                            funcionario.status === 'vacation' ? 'bg-yellow-500' : 
                                            funcionario.status === 'intern' ? 'bg-blue-500' : 'bg-gray-500'
                                        }`}>
                                            <i className={`text-white text-xs ${
                                                funcionario.status === 'active' ? 'ri-check-line' : 
                                                funcionario.status === 'vacation' ? 'ri-calendar-line' : 
                                                funcionario.status === 'intern' ? 'ri-graduation-cap-line' : 'ri-pause-line'
                                            }`}></i>
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-gray-800 dark:text-gray-100 font-semibold text-sm mb-1">{funcionario.name}</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{funcionario.email}</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-300 mb-3 font-medium">{funcionario.position}</p>
                                    
                                    <div className="w-full space-y-2">
                                        <div className="grid grid-cols-2 gap-1">
                                            <div className="text-xs text-white bg-[#666cff] dark:bg-[#7c3aed] px-2 py-1 rounded-full font-medium text-center">
                                                {funcionario.secretaria}
                                            </div>
                                            <div className="text-xs text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full font-medium text-center">
                                                {funcionario.department}
                                            </div>
                                        </div>
                                        
                                        <div className="grid grid-cols-2 gap-2 mt-3">
                                            <div className="bg-gray-100 dark:bg-gray-800 px-2 py-2 rounded text-center">
                                                <div className="text-xs text-gray-400 dark:text-gray-500 font-medium">NIF</div>
                                                <div className="text-xs text-gray-700 dark:text-gray-200 font-mono">{funcionario.nif}</div>
                                            </div>
                                            <div className="bg-gray-100 dark:bg-gray-800 px-2 py-2 rounded text-center">
                                                <div className="text-xs text-gray-400 dark:text-gray-500 font-medium">Nº Mec</div>
                                                <div className="text-xs text-gray-700 dark:text-gray-200 font-mono">{funcionario.numeroMecanografico}</div>
                                            </div>
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