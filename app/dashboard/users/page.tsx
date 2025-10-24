"use client";
import { useState } from "react";
import SearchFuncionario from "@/components/dashboard/funcionarios/SearchFuncionario";

export default function FuncionarioPage() {
    const [tipoFuncionario, setTipoFuncionario] = useState("all");
    const [searchTerm, setSearchTerm] = useState<string | null>(null);

    return (
        <>
            <SearchFuncionario selectedTipo={tipoFuncionario} setSelectedTipo={setTipoFuncionario} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </>
    );
}