export interface FuncionariosProps {
    selectedSecretaria: string[];
    selectedDepartamento: string[];
    searchTerm: string | null;
}

export interface SearchProps {
    selectedSecretaria: string[];
    setSelectedSecretaria: React.Dispatch<React.SetStateAction<string[]>>;
    selectedDepartamento: string[];
    setSelectedDepartamento: React.Dispatch<React.SetStateAction<string[]>>;
    searchTerm: string | null;
    setSearchTerm: (searchTerm: string | null) => void;
}