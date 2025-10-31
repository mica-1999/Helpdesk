export interface PedidosProps {
    selectedEstado: string;
    searchTerm: string | null;
}

export interface SearchProps {
    selectedEstado: string;
    setSelectedEstado: (estado: string) => void;
    searchTerm: string | null;
    setSearchTerm: (searchTerm: string | null) => void;
}