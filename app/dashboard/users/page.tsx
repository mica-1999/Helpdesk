"use client";
import { useState } from "react";
import SearchFuncionario from "@/components/dashboard/funcionarios/SearchFuncionario";
import FuncionariosContent from "@/components/dashboard/funcionarios/FuncionariosContent";

export default function FuncionarioPage() {
    const [tipoFuncionario, setTipoFuncionario] = useState("all");
    const [searchTerm, setSearchTerm] = useState<string | null>(null);

    return (
        <>
            <SearchFuncionario selectedTipo={tipoFuncionario} setSelectedTipo={setTipoFuncionario} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            {/* Main content area - right side */}
            <div className="flex-1 bg-gray-100 dark:bg-gray-800 flex flex-col">
                <div className="flex-1">
                    <FuncionariosContent selectedEstado={tipoFuncionario} searchTerm={searchTerm} />
                </div>
                
                {/* Footer at bottom of main content area */}
                {/* <Footer /> */}
            </div>
        </>
    );
}