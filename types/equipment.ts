export interface EquipmentProps {
    selectedStatus: string[];
    selectedType: string[];
    searchTerm: string | null;
}

export interface SearchEquipmentProps {
    selectedStatus: string[];
    setSelectedStatus: React.Dispatch<React.SetStateAction<string[]>>;
    selectedType: string[];
    setSelectedType: React.Dispatch<React.SetStateAction<string[]>>;
    searchTerm: string | null;
    setSearchTerm: (searchTerm: string | null) => void;
}