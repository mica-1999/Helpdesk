// Equipment interface
export interface Equipment {
    id: string;
    tag: string;  // Equipment tag/identifier
    serialNumber: string;
    name: string;
    type: string;  // general, networks, printers, voips
    subtype: string;  // More specific category
    assignedTo: string | null;  // Person it's attributed to
    status: string;  // all, inUse, new, decommissioned
    location?: string;
    acquisitionDate?: string;
    warrantyExpiry?: string;
}

// Sample equipment data
export const equipmentData: Equipment[] = [
    {
        id: "1",
        tag: "12845",
        serialNumber: "SN123456789",
        name: "Dell OptiPlex 7090",
        type: "general",
        subtype: "Desktop Computer",
        assignedTo: "João Silva",
        status: "inUse",
        location: "SREI - Piso 2",
        acquisitionDate: "2023-01-15",
        warrantyExpiry: "2026-01-15"
    },
    {
        id: "2", 
        tag: "34567",
        serialNumber: "SN987654321",
        name: "HP EliteBook 840",
        type: "general",
        subtype: "Laptop",
        assignedTo: "Maria Santos",
        status: "inUse",
        location: "SRE - Secretaria",
        acquisitionDate: "2023-03-20",
        warrantyExpiry: "2026-03-20"
    },
    {
        id: "3",
        tag: "5892", 
        serialNumber: "SN456789123",
        name: "Cisco Catalyst 2960",
        type: "networks",
        subtype: "Switch",
        assignedTo: null,
        status: "inUse",
        location: "SREI - Rack Principal",
        acquisitionDate: "2022-08-10",
        warrantyExpiry: "2025-08-10"
    },
    {
        id: "4",
        tag: "47123",
        serialNumber: "SN789123456", 
        name: "HP LaserJet Pro 400",
        type: "printers",
        subtype: "Laser Printer",
        assignedTo: "Ana Costa", 
        status: "inUse",
        location: "SRAP - Departamento",
        acquisitionDate: "2023-05-12",
        warrantyExpiry: "2026-05-12"
    },
    {
        id: "5",
        tag: "29634",
        serialNumber: "SN321654987",
        name: "Cisco IP Phone 7841",
        type: "voips",
        subtype: "IP Phone",
        assignedTo: "Pedro Oliveira",
        status: "inUse", 
        location: "SRITJ - Gabinete 201",
        acquisitionDate: "2023-02-28",
        warrantyExpiry: "2026-02-28"
    },
    {
        id: "6",
        tag: "58741",
        serialNumber: "SN654987321",
        name: "ASUS RT-AX88U",
        type: "networks", 
        subtype: "Router",
        assignedTo: null,
        status: "new",
        location: "SREI - Armazém",
        acquisitionDate: "2024-10-01",
        warrantyExpiry: "2027-10-01"
    },
    {
        id: "7",
        tag: "15926",
        serialNumber: "SN147258369",
        name: "Lenovo ThinkCentre M720",
        type: "general",
        subtype: "Desktop Computer", 
        assignedTo: null,
        status: "new",
        location: "SREI - Armazém",
        acquisitionDate: "2024-09-15",
        warrantyExpiry: "2027-09-15"
    },
    {
        id: "8",
        tag: "43789",
        serialNumber: "SN963852741",
        name: "Canon PIXMA MG3650",
        type: "printers",
        subtype: "Inkjet Printer",
        assignedTo: "Sofia Ferreira",
        status: "inUse",
        location: "SRSPC - Receção", 
        acquisitionDate: "2022-11-30",
        warrantyExpiry: "2025-11-30"
    },
    {
        id: "9",
        tag: "2156", 
        serialNumber: "SN741852963",
        name: "HP Compaq 6005 Pro",
        type: "general",
        subtype: "Desktop Computer",
        assignedTo: null,
        status: "decommissioned",
        location: "SREI - Depósito",
        acquisitionDate: "2018-03-10",
        warrantyExpiry: "2021-03-10"
    },
    {
        id: "10",
        tag: "37482",
        serialNumber: "SN852741963", 
        name: "Yealink SIP-T46S",
        type: "voips",
        subtype: "IP Phone",
        assignedTo: "Carlos Mendes",
        status: "inUse",
        location: "SRETC - Direção",
        acquisitionDate: "2023-07-18",
        warrantyExpiry: "2026-07-18"
    }
];