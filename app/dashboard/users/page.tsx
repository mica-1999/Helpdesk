"use client";
import { useEffect, useState } from "react";
import SearchFuncionario from "@/components/dashboard/funcionarios/SearchFuncionario";
import FuncionariosContent from "@/components/dashboard/funcionarios/FuncionariosContent";

export default function FuncionarioPage() {

    // Arrays para múltipla seleção sec/dept e pesquisa
    const [selectedSecretaria, setSelectedSecretaria] = useState<string[]>(["GRM"]);
    const [selectedDepartamento, setSelectedDepartamento] = useState<string[]>(["GRM"]);
    const [searchTerm, setSearchTerm] = useState<string | null>(null);

    // Testing
    useEffect(() => {
        console.log("Selected Secretaria:", selectedSecretaria);
        console.log("Selected Departamento:", selectedDepartamento);
        console.log("Search Term:", searchTerm);
    },[selectedSecretaria, selectedDepartamento, searchTerm]);

    return (
        <>
            <SearchFuncionario 
                selectedSecretaria={selectedSecretaria} 
                setSelectedSecretaria={setSelectedSecretaria}
                selectedDepartamento={selectedDepartamento}
                setSelectedDepartamento={setSelectedDepartamento}
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm}
            />
            {/* Main content area - right side */}
            <div className="flex-1 bg-gray-100 dark:bg-gray-800 flex flex-col">
                <div className="flex-1">
                    <FuncionariosContent 
                        selectedSecretaria={selectedSecretaria}
                        selectedDepartamento={selectedDepartamento}
                        searchTerm={searchTerm} 
                    />
                </div>
                
                
                {/* <Footer no fim se for preciso /> */}
            </div>
        </>
    );
}